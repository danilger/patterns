# State Reducer

**Область:** Frontend / React  
**Источники:** Addy Osmani, *Learning Patterns*, Ch.12; Kent C. Dodds (origin)

---

## Смысл паттерна

**State Reducer** — компонент или hook принимает optional **`reducer(state, action)`**, чтобы потребитель **контролировал переходы state** (инверсия контроля). Внутри — дефолтная логика; снаружи — возможность переопределить политику без форка библиотеки.

Типично для библиотечных примитивов: `useToggle`, combobox, downshift-like widgets — «escape hatch» для edge cases.

---

## Как устроено демо

`state-reducer.js`:

1. **`toggleReducer(state, action)`** — `toggle` / `on` / `off`.
2. **`createToggle({ reducer = toggleReducer })`** — внутренний `state`, `dispatch(action)` вызывает переданный reducer.
3. **`lockedOnReducer`** — после `on` запрещает выключение через `toggle`.

Демо:

- `plain.dispatch({ type: "toggle" })` → `{ on: true }`.
- `locked`: `on`, затем `toggle` → остаётся `{ on: true }`.

В React это выглядит как `useToggle({ reducer: myReducer })` по аналогии с `useReducer`.

```
dispatch(action)  →  reducer(state, action)  →  next state
                    ↑
              дефолтный или кастомный (lockedOnReducer)
```

---

## Когда применять

- Библиотечный hook/виджет, где пользователи просят «особые правила» (нельзя закрыть, лимиты, guard).
- Нужен controlled-like контроль над *переходами*, не только над value.
- Хочешь один API с internal state и optional override.

**Когда не стоит:** простой локальный toggle без extension points — достаточно `useState`.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Связь |
|---------|-------|
| **Controlled Components** | Полный контроль value снаружи; state reducer — контроль *как* меняется state |
| **Hooks / useReducer** | `useReducer` — встроенный механизм React для reducer-паттерна |
| **Render Props / Custom Hooks** | State reducer часто встроен в headless hook (`useCombobox`) |
| **Provider** | Reducer локален виджету; не путать с глобальным store |

---

## Краткий итог

State Reducer = **дефолтная state-машина + optional внешний reducer**. Даёт библиотекам гибкость без форка: потребитель меняет правила переходов, сохраняя остальную логику виджета. Классический пример — toggle, который нельзя выключить после включения.
