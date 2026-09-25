# Error Boundary

**Область:** Frontend / React  
**Источники:** [React docs — Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)

---

## Смысл паттерна

**Error Boundary** — компонент-оболочка, который ловит ошибки **рендера** в поддереве и показывает fallback вместо белого экрана всего приложения.

В React реализуются через class (`getDerivedStateFromError` / `componentDidCatch`) или обёртки (`react-error-boundary`). Обычные function components / hooks ошибки рендера **не** ловят.

Не ловят: ошибки в event handlers, async без проброса в render, SSR-ошибки вне границы (зависит от стека).

---

## Как устроено демо

В [`error-boundary.js`](./error-boundary.js) упрощённый boundary:

- `render(childFn)` — try/catch вокруг «ребёнка»;
- при ошибке — `fallback` + `onError`;
- `reset()` сбрасывает состояние для повторной попытки.

---

## Когда применять

- Граница маршрута / виджета / стороннего embed.
- Логирование + дружелюбный UI («что-то сломалось»).

## Когда не стоит

- Ожидать ловлю всех ошибок приложения (handlers, сеть) — нужны try/catch / error states отдельно.
- Одна глобальная граница без изоляции — один краш всё равно «уронит» большой кусок UI.

---

## Связь с другими паттернами

- Дополняет **Suspense** (pending ≠ error): часто Error Boundary снаружи Suspense.
- Не путать с Nest **Exception Filter** — другая среда, та же идея «поймать и ответить».

## Краткий итог

Error Boundary = **изолятор падений рендера** с fallback UI для поддерева.
