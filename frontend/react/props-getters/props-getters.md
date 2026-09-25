# Props Getters / Prop Collections

**Область:** Frontend / React  
**Источники:** Kent C. Dodds — Prop Collections & Getters; Addy Osmani, Ch.12

---

## Смысл паттерна

Reusable-хук отдаёт не «голый state», а **готовые props для DOM**:

- **Prop Collections** — объект вроде `togglerProps` (`onClick`, `aria-*`).
- **Props Getters** — функция `getTogglerProps(userProps)`, которая **мержит** props потребителя с внутренними (важно: не затирать чужой `onClick`).

Потребитель сам выбирает элемент (`button`, `div`) и дописывает свои атрибуты.

---

## Как устроено демо

В [`props-getters.js`](./props-getters.js):

- `callAll` вызывает несколько handlers подряд.
- `getTogglerProps({ onClick, ...rest })` кладёт `aria-pressed`, мержит `rest`, склеивает `onClick`.

---

## Когда применять

- Библиотечные хуки: toggle, disclosure, combobox.
- Нужен гибкий markup без жёсткого `<button>` внутри хука.

## Когда не стоит

- Простой компонент с фиксированной разметкой — достаточно обычных props.
- Если всегда один и тот же DOM — getter избыточен.

---

## Связь с другими паттернами

- Часто вместе с **Compound Components** и **State Reducer**.
- Близко к **Render Props**, но отдаёт props-объект, а не React-node через функцию.

## Краткий итог

Props Getters = **безопасный merge** внутренних и внешних props, чтобы хук управлял поведением, а потребитель — разметкой.
