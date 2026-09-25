# Container / Presentational

**Область:** Frontend / React  
**Источники:** Lydia Hallie — Tour of JS & React Patterns; [patterns.dev](https://www.patterns.dev)

---

## Смысл паттерна

**Container / Presentational** — разделение компонента на две роли:

- **Container** — данные, side-effects, fetch, подписки, маршрутизация.
- **Presentational** — «глупый» UI: только props → разметка, без знания об API.

Смысл: отделить **как выглядит** экран от **откуда берутся данные**, чтобы UI было проще тестировать и переиспользовать с разными источниками.

Сегодня ту же идею часто выражают через **custom hook + dumb component**: логика в `useUsers()`, отображение в `UserListView`.

---

## Как устроено демо

Файл `container-presentational.js` без React:

1. **`UserListView({ users, loading, error })`** — presentational: по props возвращает строку UI (loading / error / список имён).
2. **`UserListContainer()`** — container: вызывает `fetchUsers()`, обрабатывает ошибки, собирает `{ users, loading, error }` и передаёт в view.
3. Демо: `UserListContainer().then(console.log)` → `"Ann, Bob"`.

В React-комментарии внизу — современный вариант: `useUsers()` + `<UserListView … />`.

```
fetchUsers()           →  Container / useUsers
{ users, loading }     →  props
UserListView           →  Presentational (только UI)
```

---

## Когда применять

- Нужно тестировать UI без моков сети и store.
- Один и тот же view с разными источниками данных (REST, GraphQL, mock).
- Команда хочет явно разделить «экран» и «логику загрузки».

**Когда не обязательно:** простые страницы, где hook + один компонент уже достаточно читаемы; жёсткое разделение на два файла ради формальности.

---

## Связь с другими паттернами / соседними подходами

| Подход | Отличие |
|--------|---------|
| **Custom Hooks** | Заменяют container-класс/компонент: логика в `useX`, UI остаётся presentational |
| **Provider / Context** | Глобальные данные; Container — про локальную загрузку и связку view ↔ data |
| **Render Props / HOC** | Тоже шарят логику, но через обёртки; Container — явное имя ролей «данные vs вид» |
| **Lifting State Up** | Поднимает state к родителю; Container часто *является* тем родителем для view |

---

## Краткий итог

Container / Presentational = **данные и эффекты отдельно от разметки**. Container (или hook) владеет загрузкой и состоянием; Presentational рисует UI по props. В современном React это чаще выглядит как `useData()` + тонкий компонент, но принцип тот же: **тестируемый UI без привязки к источнику данных**.
