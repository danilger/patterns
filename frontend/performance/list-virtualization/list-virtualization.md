# List Virtualization (Windowing)

**Область:** Frontend / Performance  
**Источники:** Addy Osmani, *Learning Patterns*, Ch.12 — List Virtualization

---

## Смысл паттерна

**List Virtualization (windowing)** — в DOM рендерится только **видимое окно** списка плюс небольшой **overscan**, а не все 10 000 строк.

Scroll container имеет полную **virtual height**; строки — абсolute/ transform позиции в «окне». Библиотеки: react-window, TanStack Virtual.

Решает проблему layout/paint/memory при длинных таблицах, чатах, лентах.

---

## Как устроено демо

**`virtualSlice({ length, scrollTop, rowHeight, viewportHeight, overscan })`** в `list-virtualization.js`:

1. **`start`** — индекс первой видимой строки минус overscan (не ниже 0).
2. **`visible`** — сколько строк помещается + overscan с обеих сторон.
3. **`end`** — `min(length, start + visible)`.
4. **`items`** — массив индексов `[start … end-1]`.
5. **`totalHeight`** — `length * rowHeight` для scroll area.

Демо: 10 000 элементов, `scrollTop: 1500`, `rowHeight: 30`, viewport 300 → ~13 DOM-узлов вместо 10 000.

```
scrollTop + viewport  →  compute [start, end)
render only items[]   →  totalHeight keeps scrollbar correct
```

---

## Когда применять

- Длинные таблицы, чаты, infinite feeds, log viewers.
- Заметны лаги scroll или mount при > few hundred rows.
- Данные уже в памяти или подгружаются порциями — virtualization про *отображение*.

**Когда не стоит:** короткие списки (<100) — overhead не окупается; сложная variable row height требует измерений.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Связь |
|---------|-------|
| **Lazy Loading** | Подгрузка данных; virtualization — сколько строк в DOM |
| **Import on Visibility** | Может подгружать row-кomponent при scroll |
| **CSR / SSR** | Virtual list работает после hydration; SSR списка часто partial |
| **Code Splitting** | Ортogonal: split JS vs limit DOM nodes |

---

## Краткий итог

List Virtualization = **рендер только видимого slice + overscan**. Константная стоимость DOM при огромных `length`. Ключ — правильный `start/end`, `totalHeight` и стабильный `rowHeight` (или dynamic measure с кэшем).
