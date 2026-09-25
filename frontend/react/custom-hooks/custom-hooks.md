# Custom Hooks

**Область:** Frontend / React  
**Источники:** [patterns.dev — Hooks Pattern](https://www.patterns.dev/react/hooks-pattern); Addy Osmani, *Learning Patterns*, Ch.12

---

## Смысл паттерна

**Custom hook** — функция с именем `use…`, внутри которой вызываются другие хуки (`useState`, `useEffect`, …). Это главный современный способ **переиспользовать stateful-логику** между компонентами.

В отличие от HOC и render props, hook не добавляет узел в дерево React и не диктует JSX — только возвращает данные и колбэки.

Примеры: `useDebounce`, `useLocalStorage`, `useMediaQuery`, `useAuth`.

---

## Как устроено демо

Файл моделирует hooks на plain JS:

1. **`useToggle(initial)`** — замкнутое `value`, `toggle()`, `subscribe(fn)` для «ререндера». Демо: подписка логирует `menu open: true/false` при двух `toggle()`.
2. **`useLocalStorage(key, initial)`** — get/set с записью в `localStorage`. Демо: `theme.set("light")` → `theme.get()` → `"light"`.

React-комментарий показывает `useToggle` с `useState` и кнопку `<Menu />`.

```
useToggle / useLocalStorage  →  инкапсуляция state + side-effects
return { on, toggle }        →  компонент только потребляет API
```

---

## Когда применять

- Одна и та же связка state + effect нужна в нескольких компонентах.
- Компонент «засорился» глаголами: fetch, debounce, sync с URL — выноси в `useX`.
- Нужна композиция логики без обёрток в дереве (предпочтение вместо HOC/render props).

**Осторожно:** hooks должны вызываться на верхнем уровне; не вызывай их в циклах и условиях.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Отличие |
|---------|---------|
| **Hooks (базовый)** | `useState`/`useEffect` — примитивы; custom hook — композиция примитивов |
| **HOC** | Оборачивает компонент; hook — функция без JSX |
| **Render Props** | Логика через `children(fn)`; hook — через вызов `useX()` |
| **Container / Presentational** | Custom hook часто *заменяет* container-слой |
| **State Reducer** | `useReducer` + кастомный reducer — частный случай custom hook |

---

## Краткий итог

Custom Hooks = **переиспользуемая логика с префиксом `use`**, построенная на встроенных хуках. Компонент остаётся про UI; fetch, toggle, storage и подписки живут в `useSomething()`. Это стандартный способ шарить поведение в новом React-коде.
