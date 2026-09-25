# Server-Side Rendering (SSR)

**Область:** Frontend / Rendering  
**Источники:** Lydia Hallie & Addy Osmani — [patterns.dev (SSR)](https://www.patterns.dev)

---

## Смысл паттерна

**Server-Side Rendering (SSR)** — HTML для страницы **собирается на сервере на каждый request** (или с коротким кэшем), затем отправляется клиенту. Браузер показывает контент сразу; React **гидрирует** разметку для интерактивности.

Плюсы: быстрый FCP, SEO, персонализация по cookies/geo/session.

Минусы: нагрузка на CPU сервера, сложнее деплой и кэширование, чем у pure SSG.

---

## Как устроено демо

`ssrRequest({ req, loadData, renderToString })` в `server-side-rendering.js`:

1. Лог URL запроса (`/profile`, `userId: 7`).
2. `loadData(req)` → `{ name: "User#7" }`.
3. `renderToString(data)` → `"<html><h1>Hello User#7</h1></html>"`.
4. Лог: HTML отправлен, клиент гидрирует позже.

Один async pipeline на request — модель Next.js `getServerSideProps`, Remix loader и т.п.

```
Request → loadData(req) → renderToString → HTML response → client hydrate
```

---

## Когда применять

- Страницы с **request-данными**: cookies, geo, A/B, auth-specific UI.
- Нужны быстрый первый контент **и** SEO.
- Контент меняется часто и не подходит под long-lived static cache.

**Когда не стоит:** чисто статический marketing — SSG/ISR дешевле; чистый dashboard за login — CSR может быть достаточен.

---

## Связь с другими паттернами / соседними подходами

| Подход | Отличие |
|--------|---------|
| **CSR** | UI только после JS; SSR — HTML сразу |
| **SSG** | HTML на билде; SSR — на каждый (или почти каждый) request |
| **Streaming SSR** | SSR, но ответ chunks, не один блок |
| **ISR** | Статика + фоновое обновление; SSR — свежий render per request |
| **Islands** | Минимум JS; SSR может отдавать full page + selective hydrate |

---

## Краткий итог

SSR = **HTML на сервере per request + гидрация на клиенте**. Стандарт для персонализированных и SEO-критичных страниц с динамическими данными. Выбирай, когда staleness SSG/ISR недопустима, а пустой CSR-shell — слишком медленный.
