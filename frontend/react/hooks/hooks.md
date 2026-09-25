# Hooks

**Область:** Frontend / React  
**Источники:** Lydia Hallie & Addy Osmani — [patterns.dev](https://www.patterns.dev); Addy Osmani, *Learning JavaScript Design Patterns*, Ch.12

---

## Смысл паттерна

**Hooks** — функции (`useState`, `useEffect`, …), которые дают function component доступ к **state, эффектам и другому React API** без классов.

Главная ценность:

- локальный state и side-effects в функциональных компонентах;
- вынос stateful-логики в **custom hooks** (`use…`);
- переиспользование без лишних узлов в дереве (в отличие от HOC/render props).

В экосистеме React hooks заменили многие обёртки Observer/Decorator для типичных UI-задач.

---

## Как устроено демо

React-пример в комментарии: `Counter` с `useState(0)` и `useEffect` на `document.title`.

Plain-JS аналог — **`createCounter()`**:

- замкнутый `count`;
- `get()`, `set(next | fn)`, `subscribe(fn)`.

Демо:

```text
counter.subscribe(v => console.log("count:", v))
counter.set(1)
counter.set(c => c + 1)   // → count: 1, count: 2
```

Это модель «state + уведомление подписчиков», которую `useState` делает внутри React.

---

## Когда применять

- Нужен локальный state / effects в function component.
- Хочешь переиспользовать логику между компонентами (→ custom hooks).
- Новый код — предпочтение вместо HOC, render props и class lifecycle.

**Правила:** hooks только на верхнем уровне; зависимости в `useEffect`/`useMemo` должны быть честными.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Связь |
|---------|-------|
| **Custom Hooks** | Композиция базовых hooks в `useX` |
| **HOC / Render Props** | Старые способы шаринга; hooks — современная замена |
| **State Reducer** | `useReducer` — hook для reducer-подобной логики |
| **Provider** | `useContext` — hook для чтения Context |

---

## Краткий итог

Hooks = **state и effects в function components** плюс путь к переиспользуемой логике через custom hooks. Базовый building block современного React; понимание `useState`/`useEffect` — фундамент для всех остальных React-паттернов в этой коллекции.
