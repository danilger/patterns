# Lazy Loading

**Область:** Frontend / Performance  
**Источники:** [patterns.dev](https://www.patterns.dev); Addy Osmani (performance patterns)

---

## Смысл паттерна

**Lazy Loading** — ресурс загружается **только когда он нужен**: при переходе на route, при скролле до блока, по клику, при появлении в viewport.

Применяется к **изображениям** (`loading="lazy"`, `srcset`), **компонентам** (`React.lazy`, `import()`), **данным** (pagination, infinite scroll).

Зонтичный принцип performance: defer work до момента реальной пользы.

---

## Как устроено демо

`createLazyImage(src)` в `lazy-loading.js` — упрощённая модель lazy image:

1. **`loaded = false`** до первого «показа».
2. **`enterViewport()`** — первый раз лог `"fetch /hero.webp"`, второй — `"already loaded"`.

Демо:

```text
init: not loaded
enterViewport() → fetch /hero.webp
enterViewport() → already loaded
```

Связанные техники из JSDoc: Import on Interaction, Import on Visibility, Code Splitting.

---

## Когда применять

- Большие media ниже fold, редкие routes, тяжёлые widgets.
- Initial bundle или LCP страдают от «загрузить всё сразу».
- Мобильные пользователи и медленные сети.

**Не путать с:** virtualization — lazy про *загрузку*, windowing про *рендер DOM*.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Связь |
|---------|-------|
| **Code Splitting** | Lazy loading для JS-модулей |
| **Import on Interaction** | Частный случай lazy по событию |
| **Import on Visibility** | Частный случай lazy по viewport |
| **List Virtualization** | Дополняет: lazy data + render только видимого |
| **Islands / CSR** | Lazy снижает cost любой архитектуры |

---

## Краткий итог

Lazy Loading = **не грузи заранее то, что ещё не нужно**. Универсальный performance-паттерн для картинок, чанков и данных. Выбирай триггер: route, visibility или interaction — в зависимости от UX сценария.
