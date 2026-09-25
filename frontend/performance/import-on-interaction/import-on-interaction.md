# Import on Interaction

**Область:** Frontend / Performance  
**Источники:** Lydia Hallie & Addy Osmani — [patterns.dev](https://www.patterns.dev) performance patterns

---

## Смысл паттерна

**Import on Interaction** — JS-чанк загружается **по действию пользователя** (клик, focus, tap), а не при первой загрузке страницы и не при простом попадании в DOM.

Типичные кейсы: тяжёлый WYSIWYG, chart library, emoji-picker — только после «Edit» или открытия панели.

Отличие от route-based splitting: триггер — **намерение пользователя**, а не навигация.

---

## Как устроено демо

`createImportOnInteraction(loader)` в `import-on-interaction.js`:

1. Ленивый **`modPromise`** — null до первого interaction.
2. **`onInteraction()`** — при первом вызове лог `"interaction → start loading chunk"`, стартует `loader()`; повторные вызовы ждут тот же promise.
3. После resolve — `mod.open()`.

Демо: loader с delay 15 ms возвращает `{ open: () => "Editor ready" }`; один `onInteraction()` → `"Editor ready"`.

```
Page load     → no editor chunk
User clicks   → import() starts
Promise done  → mod.open()
```

---

## Когда применять

- Функция редко используется, но тяжёлая (rich text, maps, 3D).
- UX явно требует жеста перед тяжёлой фичей.
- Хочешь отложить загрузку ниже приоритетом, чем above-the-fold контент.

**Комбинируй с:** prefetch on hover для снижения latency после клика.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Отличие |
|---------|---------|
| **Import on Visibility** | Триггер — scroll/viewport, не interaction |
| **Code Splitting** | Механизм `import()`; interaction — *когда* грузить |
| **Lazy Loading** | Общий принцип «не upfront» |
| **CSR / Islands** | Interaction split уменьшает JS в любом рендер-модели |

---

## Краткий итог

Import on Interaction = **чанк по клику/focus, не при load**. Экономит bandwidth и parse time для редких тяжёлых UI. Кэшируй promise после первого interaction, чтобы не грузить модуль дважды.
