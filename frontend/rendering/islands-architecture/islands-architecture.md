# Islands Architecture

**Область:** Frontend / Rendering  
**Источники:** Addy Osmani, *Learning JavaScript Design Patterns* (Islands); [patterns.dev](https://www.patterns.dev) rendering patterns

---

## Смысл паттерна

**Islands Architecture** — большая часть страницы — **статичный HTML без JS**. Интерактивность живёт в изолированных **«островах»**, которые **гидрируются точечно**, а не всё приложение целиком.

Цель: минимальный JS на контентных сайтах — статья, документация, блог — с редкими виджетами (поиск, лайк, корзина).

Популярные реализации: Astro, частично partial hydration в других фреймворках.

---

## Как устроено демо

`renderPage({ staticHtml, islands })` в `islands-architecture.js`:

1. Лог: статичный HTML уходит без JS для статических частей.
2. Для каждого island: лог `hydrate island "Name" only`, вызов `island.mount()`.
3. Возвращает `{ staticHtml, hydrated }`.

Демо: статья `"Long blog post..."` + острова `SearchBox` и `LikeButton` с mount-строками.

```
Page = static HTML (0 JS)
     + island SearchBox  → hydrate + mount
     + island LikeButton → hydrate + mount
```

---

## Когда применять

- Контентные сайты с редкими интерактивными блоками.
- SEO и быстрый first paint важнее «единого SPA».
- Хочешь резко сократить JS budget по сравнению с full CSR/SSR hydration.

**Когда не стоит:** app-like UI, где почти весь экран интерактивен — islands добавят сложность без выигрыша.

---

## Связь с другими паттернами / соседними подходами

| Подход | Отличие |
|--------|---------|
| **SSG** | Islands часто строятся поверх статического HTML |
| **CSR / full hydration** | Весь root interactive; islands — selective hydration |
| **Code Splitting** | Делит бандл; islands — делит *гидрацию* и scope JS |
| **Import on Visibility** | Часто комбинируют: island грузится/гидрируется при появлении |

---

## Краткий итог

Islands = **статика по умолчанию, JS только там, где нужна интерактивность**. Архитектура для content sites: быстрый HTML, маленький JS footprint, точечная гидрация виджетов вместо monolithic SPA.
