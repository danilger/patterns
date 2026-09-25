# Streaming SSR

**Область:** Frontend / Rendering  
**Источники:** Lydia Hallie — [patterns.dev (Streaming SSR)](https://www.patterns.dev)

---

## Смысл паттерна

**Streaming SSR** — сервер **не ждёт полного дерева React**, а **стримит HTML кусками** по мере готовности секций. Медленные части (виджеты с API) не блокируют отправку shell (header, layout).

В React: `renderToPipeableStream`, Suspense boundaries — fallback в потоке, затем замена на готовый контент.

Пользователь раньше видит каркас страницы; TTFB и perceived performance улучшаются на «тяжёлых» страницах.

---

## Как устроено демо

Async generator **`streamSSR(sections)`** в `streaming-ssr.js`:

1. `yield "<!doctype html><html><body>"`.
2. Для каждой секции: `await section.delay`, затем `yield section.html`.
3. `yield "</body></html>"`.

Демо с тремя секциями (delays 10, 30, 5 ms):

```text
chunk: <!doctype html>...
chunk: <header>Shell</header>
chunk: <main>Slow widget</main>
chunk: <footer>Done</footer>
chunk: </body></html>
```

Shell уходит до «медленного» main — суть streaming.

```
Stream: shell → fast sections → slow sections → close tags
(not: wait for everything → one big HTML)
```

---

## Когда применять

- Большие страницы с независимыми блоками данных.
- Часть данных медленная — shell и быстрые секции должны появиться сразу.
- React 18+ / frameworks с поддержкой streaming (Next.js App Router и др.).

**Когда не стоит:** маленькие однородные страницы — выигрыш marginal; сложность отладки и порядка hydration выше.

---

## Связь с другими паттернами / соседними подходами

| Подход | Отличие |
|--------|---------|
| **SSR (classic)** | Один HTML-блок после полного render |
| **Suspense** | Механизм в React для streaming boundaries |
| **CSR** | Нет server stream; всё после bundle |
| **Islands** | Тоже улучшает TTI, но через selective JS, не stream HTML |
| **ISR / SSG** | Про lifecycle страницы; streaming — про *форму* SSR-ответа |

---

## Краткий итог

Streaming SSR = **HTML по частям, как только секции готовы**. Решает проблему «медленный виджет блокирует всю страницу». Shell и быстрый контент — в браузере раньше; медленные Suspense-острова догружаются в том же HTTP-потоке.
