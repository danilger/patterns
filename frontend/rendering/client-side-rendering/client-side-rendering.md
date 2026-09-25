# Client-Side Rendering (CSR)

**Область:** Frontend / Rendering  
**Источники:** Lydia Hallie & Addy Osmani — [patterns.dev](https://www.patterns.dev) / Tour of JS & React Patterns

---

## Смысл паттерна

**Client-Side Rendering (CSR)** — сервер отдаёт **тонкий HTML + JS-бандл**. Весь UI собирается **в браузере** после загрузки и выполнения JavaScript.

Плюсы: быстрый TTFB для «оболочки», богатая интерактивность после старта, простая модель SPA.

Минусы: контент и SEO зависят от JS; на слабых сетях медленные FCP/LCP; пользователь видит пустой или минимальный HTML до монтирования приложения.

---

## Как устроено демо

`csrApp({ fetchData, render })` в `client-side-rendering.js`:

1. Лог: загрузка JS-бандла.
2. Лог: выполнение JS, mount приложения.
3. `fetchData()` на клиенте → лог «data fetched on client».
4. `render(data)` → строка `"HTML built on client: Post"`.

Демо возвращает Promise с итоговой строкой — модель «данные после JS, UI строится локально».

```
Browser: HTML shell + bundle.js
    → execute JS → fetch API → render DOM in client
```

---

## Когда применять

- SPA-дашборды, приложения за логином.
- Мало требований к SEO (или SEO через prerender отдельно).
- Интерактивность важнее первого paint контента.

**Когда не стоит:** публичный контент, маркeting, слабые устройства — рассмотри SSR, SSG или islands.

---

## Связь с другими паттернами / соседними подходами

| Подход | Отличие |
|--------|---------|
| **SSR** | HTML на сервере на каждый request; CSR — на клиенте |
| **SSG / Static** | HTML готов на билде; CSR — после JS |
| **Streaming SSR** | Куски HTML по мере готовности; CSR — один клиентский рендер |
| **Islands** | Статика без JS + точечная гидрация; CSR — всё приложение на JS |
| **Code Splitting** | Уменьшает initial bundle CSR, но не меняет модель рендера |

---

## Краткий итог

CSR = **UI рождается в браузере** после JS. Стандарт для классических SPA. Хорош для app-like experience за auth; для публичных страниц часто комбинируют с SSR/SSG или islands, чтобы улучшить первый экран и SEO.
