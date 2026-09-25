# Portal

**Область:** Frontend / React  
**Источники:** [React docs — Portals](https://react.dev/reference/react-dom/createPortal)

---

## Смысл паттерна

**Portal** рендерит children в DOM-узел **вне** DOM-иерархии родителя (часто `document.body`), но оставляет их в **React-дереве** (контекст, bubbling синтетических событий).

Нужен, когда layout родителя (`overflow: hidden`, stacking context) мешает modal / tooltip / dropdown.

---

## Как устроено демо

В [`portal.js`](./portal.js):

- `createPortal(children, container)` кладёт узел в fake `body`;
- `Modal` при `open` уходит в portal, а не в children `app` с `overflow: hidden`.

В реальном React: `createPortal(jsx, document.getElementById('modal-root'))`.

---

## Когда применять

- Модалки, тосты, popover, полноэкранные оверлеи.
- Выпадающие списки из таблиц/карточек с обрезанием overflow.

## Когда не стоит

- Обычный inline UI без проблем со слоями — portal усложняет a11y focus и тестирование DOM.
- Забывать про focus trap / `aria-modal` у диалогов.

---

## Связь с другими паттернами

- Часто внутри **Compound** (Modal.Root + Portal).
- Сосед по UX: **Provider** для темы/z-index не заменяет portal.

## Краткий итог

Portal = **другой DOM-родитель, тот же React-родитель** — обход ограничений layout без разрыва контекста.
