# Suspense Boundary

**Область:** Frontend / React  
**Источники:** [React docs — Suspense](https://react.dev/reference/react/Suspense); связано со Streaming SSR / lazy

---

## Смысл паттерна

**Suspense** объявляет границу с `fallback`: пока потомок в состоянии ожидания (lazy-чанк, Suspense-compatible data), React показывает placeholder, не блокируя остальное дерево (где возможно).

Протокол: компонент при pending **throws Promise**; ближайший Suspense его ловит. Это не Error Boundary (ошибки — отдельно).

---

## Как устроено демо

В [`suspense.js`](./suspense.js):

- `createLazy` — имитация `React.lazy`: пока promise не resolved, «компонент» бросает promise;
- `createSuspense` показывает fallback, ждёт, рендерит снова.

---

## Когда применять

- `React.lazy` + code splitting маршрутов/виджетов.
- Streaming SSR / selective hydration.
- Data libraries с Suspense API.

## Когда не стоит

- Подменять все спиннеры без стратегии (водопад запросов).
- Ловить ошибки через Suspense — нужен **Error Boundary**.

---

## Связь с другими паттернами

- С **Code Splitting** / **Lazy Loading** (`frontend/performance/`).
- Со **Streaming SSR** (`frontend/rendering/streaming-ssr/`).
- Пара с **Error Boundary** снаружи.

## Краткий итог

Suspense Boundary = **декларативный pending UI** для асинхронных потомков, пока они не готовы отрисоваться.
