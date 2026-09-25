# Controlled / Uncontrolled Components

**Область:** Frontend / React  
**Источники:** [React docs](https://react.dev); Addy Osmani, *Learning Patterns*, Ch.12

---

## Смысл паттерна

**Controlled** — значение поля живёт в **React state** (или внешнем store). Каждый ввод идёт через `value` + `onChange`; UI — отражение state.

**Uncontrolled** — «источник правды» — **DOM**. React задаёт только `defaultValue`, дальше читаешь через `ref` (submit, blur, imperative API).

Выбор определяет, **кто владелец значения**: React или браузер. Это влияет на валидацию, синхронизацию нескольких полей и частоту ререндеров.

---

## Как устроено демо

Plain-JS аналог в `controlled-uncontrolled.js`:

1. **`createControlledInput(initial)`** — внутренний `value`, меняется только через `onChange(next)`. `controlled.onChange("hello")` → `controlled.value === "hello"`.
2. **`createUncontrolledInput(initial)`** — объект «DOM» с `defaultValue` и `ref`. Пользователь «печатает» через `type()`; React-подобное чтение — `read()`.

Демо логирует оба режима после изменения значения.

```
Controlled:   value в state  →  onChange обновляет state  →  UI синхронен
Uncontrolled: defaultValue  →  DOM хранит value  →  read() по ref
```

В React: `<input value={x} onChange={…} />` vs `<input defaultValue={x} ref={…} />`.

---

## Когда применять

**Controlled:**

- Валидация и форматирование на каждый символ.
- Несколько полей должны быть синхронны (конвертер валют, маски).
- Значение должно совпадать с внешним state (controlled form library).

**Uncontrolled:**

- Простые формы, отправка раз в конце.
- Интеграция с non-React (jQuery-плагины, file input).
- Меньше ререндеров на каждый keystroke.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Связь |
|---------|-------|
| **Lifting State Up** | Controlled-формы часто поднимают общий state к родителю |
| **State Reducer** | Внешний `reducer` — способ контролировать переходы controlled-компонента |
| **Provider** | Глобальный theme/locale не отменяет controlled/uncontrolled для inputs |
| **Hooks** | `useState` — типичная основа controlled; `useRef` — для uncontrolled |

---

## Краткий итог

Controlled / Uncontrolled — **кто хранит значение поля**: React state или DOM. Controlled даёт полный контроль и предсказуемый UI; uncontrolled проще для «отправил форму — прочитал ref». Для большинства интерактивных форм в React предпочитают controlled.
