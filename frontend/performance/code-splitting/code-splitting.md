# Code Splitting / Dynamic Import

**Область:** Frontend / Performance  
**Источники:** Addy Osmani, *Learning Patterns*, Ch.12; Lydia Hallie — performance patterns; [patterns.dev](https://www.patterns.dev)

---

## Смысл паттерна

**Code Splitting** — разбиение бандла на **чанки**, чтобы начальная загрузка route тянула **меньше JS**. Редкие экраны (админка, модалки, тяжёлые редакторы) подгружаются по demand.

В JavaScript это нативный **`import()`** (dynamic import). В React: `React.lazy(() => import('./Admin'))` + `<Suspense>`.

Цель: улучшить Time-to-Interactive и размер initial bundle без отказа от большого приложения.

---

## Как устроено демо

`route(path)` в `code-splitting.js`:

1. **`path === "/admin"`** — лог `"lazy-load admin chunk..."`, `await loadAdminPanel()` (имитация `import('./admin-panel.js')`), возвращает `"AdminPanel chunk loaded"`.
2. Иначе — `"Home (in main bundle)"` из основного бандла.

Демо вызывает `route("/")` и `route("/admin")` — контраст main vs lazy chunk.

```
/main.js          → Home, core routes
/admin.chunk.js   → loaded only when route === "/admin"
```

---

## Когда применять

- Большие apps с редкими routes, модалками, admin-зонами.
- Тяжёлые зависимости (charts, editors) не нужны на первом экране.
- Route-based или component-based splitting в webpack/Vite/Rollup.

**Осторожно:** слишком мелкие чанки → лишние HTTP- roundtrips; балансируй с prefetch/preload для предсказуемых переходов.

---

## Связь с другими паттернами / соседними подходами

| Паттерн | Связь |
|---------|-------|
| **Lazy Loading** | Зонтичный термин; code splitting — техника для JS-модулей |
| **Import on Interaction** | Когда чанк грузится по клику, а не по route |
| **Import on Visibility** | Чанк при появлении в viewport |
| **CSR** | Splitting уменьшает cost CSR, не меняя модель рендера |

---

## Краткий итог

Code Splitting = **dynamic `import()` и отдельные чанки** вместо одного монолитного bundle. Стандарт для SPA: быстрый первый route, тяжёлое — по необходимости. В React обязательно сочетай с Suspense и осмысленными границами split.
