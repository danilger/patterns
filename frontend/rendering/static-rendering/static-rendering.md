# Static Rendering (SSG)

**Область:** Frontend / Rendering  
**Источники:** Lydia Hallie — [patterns.dev (Static Rendering)](https://www.patterns.dev)

---

## Смысл паттерна

**Static Rendering (SSG — Static Site Generation)** — HTML **генерируется на этапе билда** и раздаётся с CDN или статического хостинга. Runtime-сервера рендера для каждой страницы не нужно.

Плюсы: отличный SEO, минимальный TTFB, дешёвое масштабирование, предсказуемая производительность.

Минусы: контент обновляется **новым деплоем** (или через ISR для больших сайтов).

---

## Как устроено демо

Два шага в `static-rendering.js`:

1. **`staticBuild(pages)`** — на билде для каждой страницы `{ slug, title }` создаёт HTML-строку, лог `"build time: pre-render HTML"`. Результат — объект-кэш `{ "/": "...", "/about": "..." }`.
2. **`serveFromCdn(cache, slug)`** — мгновенная отдача из кэша или `"404"`.

Демо: `serveFromCdn(cache, "/about")` → HTML с `<h1>About</h1>`.

```
Build time:  pages[] → HTML files / cache map
Runtime:     CDN serves prebuilt HTML (no server render)
```

---

## Когда применять

- Маркетинг, блоги, документация, landing.
- Контент редко меняется или привязан к deploy pipeline.
- Нужны максимальные SEO и edge performance.

**Когда не стоит:** highly personalized per-request UI — SSR; huge catalogs с частыми обновлениями — ISR.

---

## Связь с другими паттернами / соседними подходами

| Подход | Отличие |
|--------|---------|
| **ISR** | SSG + фоновая регенерация по TTL |
| **SSR** | HTML на request; SSG — на build |
| **CSR** | Контент после JS; SSG — готовый HTML |
| **Islands** | Часто поверх SSG: статическая разметка + острова JS |
| **Streaming SSR** | Противоположный полюс: динамическая сборка по chunks |

---

## Краткий итог

Static Rendering = **HTML готов до деплоя, отдача с CDN**. Лучший выбор для редко меняющегося публичного контента. Для больших или часто обновляемых каталогов дополняй ISR, не уходя полностью в SSR.
