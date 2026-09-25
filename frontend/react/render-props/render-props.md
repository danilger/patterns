# Render Props

**Область:** Frontend / React  
**Источники:** [patterns.dev — Render Props](https://www.patterns.dev/react/render-props-pattern); Addy Osmani, *Learning Patterns*, Ch.12

---

## Смысл паттерна

**Render Props** — компонент принимает **функцию** (`render` или `children`) и вызывает её, передавая данные и колбэки. **Поведение внутри**, **разметка снаружи**.

Потребитель полностью контролирует JSX; библиотека не диктует DOM-структуру.

Для обычного шаринга логики сегодня чаще **custom hooks**. Render props остаются сильны в **headless UI**: Downshift, React Aria, TanStack Table.

---

## Как устроено демо

Два примера в `render-props.js`:

1. **`MouseTracker({ render })`** — фиксированный state `{ x: 12, y: 40 }`, возвращает `render(state)`. Демо: `"cursor at 12,40"`.
2. **`ListFilter({ items, children })`** — API с `query`, `setQuery`, `filtered()`. `children(api)` — render prop; после `setQuery("re")` фильтрует `["React", "Nest", "GoF"]` → `"React"`.

React-комментарий: `<Mouse>{({ x, y }) => <p>…</p>}</Mouse>` с `onMouseMove`.

```
MouseTracker / ListFilter  →  логика + state внутри
render / children(api)     →  потребитель рисует UI
```

---

## Когда применять

- Библиотека не должна диктовать разметку (accessible combobox, table).
- Нужен полный контроль JSX у потребителя.
- Headless-комponent с богатым поведением и тонкой стилизацией снаружи.

**Когда не стоит:** простая переиспользуемая логика — достаточно `useX()`; render prop добавляет вложенность JSX.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Отличие |
|---------|---------|
| **Custom Hooks** | Та же логика, но без функции в JSX |
| **HOC** | Оборачивает компонент; render props — вызывает функцию |
| **Compound Components** | Декларативное дерево детей вместо `children(fn)` |
| **Controlled / State Reducer** | Headless-кomponent может комбинировать render props + reducer |

---

## Краткий итог

Render Props = **«дай мне state — я нарисую UI»**. Максимальная гибкость разметки для библиотек. В прикладном коде уступает hooks, но для headless UI остаётся каноничным контрактом между поведением и presentation.
