# Provider (Context)

**Область:** Frontend / React  
**Источники:** [patterns.dev — Provider Pattern](https://www.patterns.dev/react/provider-pattern); Addy Osmani, *Learning Patterns*, Ch.12

---

## Смысл паттерна

**Provider** кладёт данные в **Context**, чтобы глубокие потомки читали их **без prop drilling**. В React: `createContext` + `<Provider value={…}>` + `useContext`.

Ближайший GoF-аналог — смесь **Mediator / Observer** для дерева UI: один узел публикует value, подписчики в поддереве получают обновления.

Типичные данные: theme, locale, auth user, feature flags, конфиг дизайн-системы.

---

## Как устроено демо

`createProvider(initial)` — plain-JS модель:

1. Замкнутый **`value`**, множество **`listeners`**.
2. **`Provider.set(next | fn)`** — обновляет value и уведомляет подписчиков.
3. **`useContext(fn)`** — подписка; сразу вызывает `fn(value)`.

Демо с `Theme = createProvider({ mode: "dark" })`:

- `Theme.useContext(v => console.log("theme:", v.mode))` → `"dark"`.
- `Theme.Provider.set({ mode: "light" })` → подписчик получает `"light"`.

React-комментарий: `ThemeProvider`, `useMemo` для value, `useTheme()` с проверкой «вне Provider».

---

## Когда применять

- Theme, locale, текущий пользователь, feature flags.
- Данные нужны **многим веткам** дерева, а не одному sibling-поддереву.
- Хочешь избежать проброса props через 5+ уровней.

**Осторожно:** частые обновления `value` → лишние ререндеры всех потребителей. Дроби контексты, мемоизируй `value`, разделяй «часто меняющееся» и «стабильное».

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Связь |
|---------|-------|
| **Compound Components** | Context часто транспорт shared state внутри виджета |
| **Lifting State Up** | Provider — когда lift «упёрся» в корень или несколько веток |
| **Custom Hooks** | `useTheme()` — idiomatic facade над `useContext` |
| **HOC** | `withTheme(Component)` — старый способ; Provider + hook — новый |

---

## Краткий итог

Provider = **глобальные для поддерева данные через Context** без prop drilling. Не замена store для сложной логики, но идеален для редко меняющихся cross-cutting значений. Проектируй границы контекста и стабильность `value`, чтобы не убить производительность.
