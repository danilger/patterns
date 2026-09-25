# Control Props

**Область:** Frontend / React  
**Источники:** Kent C. Dodds — Control Props; связан с Controlled components

---

## Смысл паттерна

Один виджет умеет работать в двух режимах:

| Режим | API | Кто владеет state |
|-------|-----|-------------------|
| Uncontrolled | `defaultValue` | сам виджет |
| Controlled | `value` + `onChange` | родитель |

Это **Control Props**: «контрольные» props (`value`/`onChange`) при наличии полностью ведут state; иначе — внутренний state.

Отличие от простого Controlled/Uncontrolled в формах: здесь один **библиотечный** компонент официально поддерживает оба режима.

---

## Как устроено демо

В [`control-props.js`](./control-props.js) `createSwitch`:

- если передан `value` — режим controlled;
- иначе — `defaultValue` / internal;
- `toggle()` пишет внутрь или наружу через `onChange`.

---

## Когда применять

- Toggle, Tabs, Select, Modal в дизайн-системе.
- Родитель иногда синхронизирует с URL/store, иногда нет.

## Когда не стоит

- Виджет всегда только controlled или только uncontrolled — два режима не нужны.
- Путать с State Reducer (там инверсия переходов, не владение value).

---

## Связь с другими паттернами

- Надстройка над **Controlled / Uncontrolled**.
- Часто рядом с **State Reducer** и **Props Getters**.

## Краткий итог

Control Props = **один API виджета** с опциональным внешним контролем `value`/`onChange` и fallback на внутренний state.
