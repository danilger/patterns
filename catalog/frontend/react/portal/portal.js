/**
 * @pattern Portal
 * @area Frontend / React
 * @sources React docs — Portals (`createPortal`)
 *
 * @description
 * Рендерит детей в DOM-узел вне иерархии родителя (часто `document.body`),
 * сохраняя React-контекст (events bubbling в React-дереве). Нужен для modal,
 * tooltip, dropdown поверх overflow/z-index ограничений.
 *
 * @when
 * - модалки, тосты, popover поверх layout
 * - родитель с overflow:hidden ломает absolute-позиционирование
 */

function createPortalHost() {
  const body = { children: [] }; // fake document.body
  return {
    body,
    /** React.createPortal(children, domNode) — упрощённо */
    createPortal(children, container = body) {
      const node = { type: "portal", children, container };
      container.children.push(node);
      return node;
    },
  };
}

function Modal({ open, title, host }) {
  if (!open) return null;
  return host.createPortal({
    role: "dialog",
    title,
  });
}

// --- demo ---
const host = createPortalHost();
const app = { type: "app", overflow: "hidden", children: [] };

const portalNode = Modal({ open: true, title: "Confirm", host });
console.log("app tree stays clean; portal on body:", host.body.children[0].children.title);
console.log("portal container === body:", portalNode.container === host.body);
