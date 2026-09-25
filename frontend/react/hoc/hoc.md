# Higher-Order Component (HOC)

**Область:** Frontend / React  
**Источники:** [patterns.dev — HOC Pattern](https://www.patterns.dev/react/higher-order-component-pattern); Lydia Hallie — Tour of JS & React Patterns

---

## Смысл паттерна

**HOC** (Higher-Order Component) — функция вида `(Component) => EnhancedComponent`. Она **оборачивает** компонент и добавляет cross-cutting поведение: auth, analytics, i18n, default props, logging.

По духу близок к **Decorator** из GoF: исходный компонент не меняется, расширение — через обёртку.

В legacy-коде живут `connect` (Redux), `withRouter`, `withAuth`. Для новой логики чаще берут **custom hooks** — нет лишнего узла в дереве, проще композиция.

---

## Как устроено демо

Plain-JS HOC-цепочка в `hoc.js`:

1. **`withLogging(renderFn)`** — логирует props и вызывает исходную render-функцию.
2. **`withDefaultProps(defaults)(renderFn)`** — мержит defaults с props.
3. **`UserCard({ name, role })`** → строка `"UserCard(name, role)"`.
4. **`Enhanced = withLogging(withDefaultProps({ role: "guest" })(UserCard))`**.

Демо:

- `Enhanced({ name: "Ann" })` → role подставлен как `"guest"`.
- `Enhanced({ name: "Bob", role: "admin" })` → явный role перекрывает default.

React-комментарий: `withAuth(Dashboard)` с редиректом, если нет user.

---

## Когда применять

- Библиотечный API должен обернуть «любой» компонент (guard, theme).
- Нужен компонент-обёртка: Error Boundary, Suspense boundary.
- Поддержка старого кода на class components и Redux `connect`.

**Когда не стоит:** новая feature-логика — лучше custom hook; HOC усложняет DevTools и типизацию props.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Отличие |
|---------|---------|
| **Custom Hooks** | Предпочтительная замена для шаринга логики без обёртки |
| **Render Props** | Тоже инверсия, но через функцию-render, не через wrapper-компонент |
| **Provider** | HOC может *читать* context; Provider — транспорт данных |
| **Decorator (GoF)** | HOC — UI-специфичный декоратор для React-дерева |

---

## Краткий итог

HOC = **функция, которая возвращает улучшенный компонент**. Удобен для библиотек и legacy, но в новом коде уступает hooks. Помни про convention `withX` / `connect` и про то, что props обёртки не должны «протекать» в DOM без `forwardRef`.
