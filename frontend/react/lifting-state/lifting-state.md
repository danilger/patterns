# Lifting State Up

**Область:** Frontend / React  
**Источники:** Addy Osmani, *Learning JavaScript Design Patterns*, Ch.12

---

## Смысл паттерна

**Lifting State Up** — если двум sibling-компонентам нужно **одно и то же состояние**, его поднимают к **ближайшему общему родителю** и передают вниз через props (value + onChange).

Идея: один источник правды на уровне родителя; дети остаются синхронизированными без дублирования state.

Когда state становится «глобальным» для всего приложения — следующий шаг Provider или внешний store, а не бесконечный lift вверх.

---

## Как устроено демо

`createTemperatureApp()` в `lifting-state.js`:

1. Единый **`celsius`** и подписчики.
2. **`getState()`** возвращает `{ celsius, fahrenheit }` (конвертация на лету).
3. **`setCelsius(v)`** и **`setFahrenheit(v)`** пишут в тот же `celsius`, затем `notify()`.

Демо: подписка логирует пары `C=… F=…`; `setCelsius(25)` и `setFahrenheit(86)` обновляют оба «поля» согласованно.

React-комментарий: `Calculator` с `useState` для Celsius и два input — CelsiusInput / FahrenheitInput с derived Fahrenheit.

```
        Calculator (state: celsius)
           /              \
  CelsiusInput          FahrenheitInput
  value + onChange        value + onChange (через конвертацию)
```

---

## Когда применять

- Два или больше дочерних UI должны отражать одни данные (конвертеры, фильтр + список).
- Siblings должны реагировать на действия друг друга.
- State ещё локален для поддерева — не нужен глобальный store.

**Когда не стоит:** глубокий prop drilling через много уровней → Context, composition или store.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Отличие |
|---------|---------|
| **Provider / Context** | Когда lift дошёл слишком высоко или нужно многим веткам |
| **Controlled Components** | Lifted state часто живёт в родителе controlled-формы |
| **Container / Presentational** | Родитель-container может владеть поднятым state |
| **Compound Components** | Shared state внутри семейства виджета, не обязательно «lift» к странице |

---

## Краткий итог

Lifting State Up = **общий state у ближайшего родителя**, props вниз. Простейший способ синхронизировать siblings без глобального store. Классический пример — два поля температуры, которые всегда показывают одно и то же значение в разных единицах.
