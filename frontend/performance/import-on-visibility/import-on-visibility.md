# Import on Visibility

**Область:** Frontend / Performance  
**Источники:** [patterns.dev — Import on Visibility](https://www.patterns.dev) (Hallie / Osmani)

---

## Смысл паттерна

**Import on Visibility** — чанк или виджет загружается, когда элемент **входит во viewport** (обычно через **IntersectionObserver**).

Подходит для **below-the-fold** блоков: комментарии, карусели, карты, тяжёлые секции лендинга — пользователь может их never scroll до.

Принцип: не тратить сеть и main thread на то, что ещё не видно.

---

## Как устроено демо

`createImportOnVisibility(loader)` в `import-on-visibility.js`:

1. Флаг **`started`** — защита от повторной загрузки.
2. **`onVisible()`** — при первом вызове лог `"visible → load chunk"`, `await loader()`, return `mod.mount()`.
3. Повторный вызов → `"already loading/loaded"`.

Демо: `comments.onVisible()` → `"Comments widget mounted"`.

В браузере `onVisible` привязывают к IntersectionObserver callback вместо прямого вызова.

```
Element off-screen → no chunk
Intersection       → import() + mount()
```

---

## Когда применять

- Below-the-fold виджеты, lazy sections лендинга.
- Длинные страницы с несколькими тяжёлыми embed.
- Хочешь улучшить initial load без ожидания клика.

**Осторожно:** слишком агрессивный rootMargin может свести выигрыш к нулю; учитывай slow scroll и mobile.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Отличие |
|---------|---------|
| **Import on Interaction** | Триггер — жест пользователя |
| **Lazy Loading (images)** | Тот же viewport-триггер для `<img loading="lazy">` |
| **List Virtualization** | Экономит DOM; visibility import — экономит JS |
| **Islands** | Island может гидрироваться/import при visibility |
| **Code Splitting** | Visibility — стратегия *timing* для dynamic import |

---

## Краткий итог

Import on Visibility = **грузи JS, когда блок почти виден**. IntersectionObserver + dynamic import — стандарт для ленивых секций длинных страниц. Не дублируй загрузку: один promise на виджет после первого intersection.
