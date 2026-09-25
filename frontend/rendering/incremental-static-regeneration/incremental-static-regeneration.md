# Incremental Static Regeneration (ISR)

**Область:** Frontend / Rendering  
**Источники:** Lydia Hallie — [patterns.dev (ISR)](https://www.patterns.dev)

---

## Смысл паттерна

**Incremental Static Regeneration (ISR)** — гибрид SSG и динамики: страницы **пререндерятся** (как статика), но могут **фоново перегенерироваться** по TTL (**stale-while-revalidate**).

Пользователь может увидеть **слегка устаревший** HTML; следующий запрос (или фоновая регенерация) отдаёт свежую версию без полного redeploy.

Подходит для каталогов с тысячами URL, где полный SSG на билде дорог, а SSR на каждый hit — тоже.

---

## Как устроено демо

`createIsrCache({ revalidateSeconds })` в `incremental-static-regeneration.js`:

1. **`get(slug, render)`** — lookup в `Map`.
2. **MISS** — `render(slug)`, сохранить `{ html, ts }`, лог `"MISS → render"`.
3. **HIT** (свежий) — вернуть кэш, лог `"HIT"`.
4. **STALE** (`now - ts > TTL`) — отдать **старый** html сразу, в фоне вызвать `render` и обновить кэш.

Демо с `revalidateSeconds: 0` (мгновенный stale): три вызова `/product/1` показывают MISS → STALE + background → HIT с новой версией `v2`.

```
Request → stale HTML fast
       → background revalidate
Next request → fresh HTML from cache
```

---

## Когда применять

- Много страниц (каталог, CMS), контент обновляется чаще деплоя, но не на каждый клик.
- Нужны CDN-TTFB статики + периодическая свежесть.
- Допустима кратковременная staleness (минуты, не секунды критичной торговли).

**Когда не стоит:** данные должны быть строго актуальны на каждый request — SSR или on-demand revalidation с коротким TTL и мониторингом.

---

## Связь с другими паттернами / соседними подходами

| Подход | Отличие |
|--------|---------|
| **Static Rendering (SSG)** | Обновление только деплоем; ISR — фоновая регенерация |
| **SSR** | HTML на каждый request; ISR — кэш + revalidate |
| **CSR** | Контент после JS; ISR — готовый HTML с CDN |
| **Streaming SSR** | Про доставку по chunks; ISR — про lifecycle кэша страниц |

---

## Краткий итог

ISR = **статика + фоновое обновление по TTL**. Баланс между скоростью CDN и свежестью контента без rebuild всего сайта. Ключевая семантика — stale-while-revalidate: быстрый ответ сейчас, свежесть — на следующий визит или в фоне.
