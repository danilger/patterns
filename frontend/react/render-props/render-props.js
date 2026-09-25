/**
 * @pattern Render Props
 * @area Frontend / React
 * @sources patterns.dev — Render Props; Addy Osmani Ch.12
 *
 * @description
 * Компонент принимает функцию (`render` или `children`) и вызывает её,
 * передавая данные/колбэки. Поведение внутри, разметка — снаружи.
 *
 * @modern
 * Для обычного шаринга логики — custom hooks.
 * Render props всё ещё сильны в headless UI (Downshift, React Aria, TanStack Table).
 *
 * @when
 * - библиотека не должна диктовать разметку
 * - нужен полный контроль JSX у потребителя
 */

function MouseTracker({ render }) {
  // симуляция позиции
  const state = { x: 12, y: 40 };
  return render(state);
}

function ListFilter({ items, children }) {
  const [query, setQuery] = [{ q: "" }, (q) => ({ q })];
  // упрощённый demo без React state:
  const api = {
    query: "",
    setQuery(q) {
      api.query = q;
    },
    filtered() {
      return items.filter((i) =>
        i.toLowerCase().includes(api.query.toLowerCase())
      );
    },
  };
  return children(api);
}

// --- demo ---
console.log(
  MouseTracker({
    render: ({ x, y }) => `cursor at ${x},${y}`,
  })
);

const ui = ListFilter({
  items: ["React", "Nest", "GoF"],
  children: (api) => {
    api.setQuery("re");
    return api.filtered().join(", ");
  },
});
console.log(ui);

/** @example React */
/*
function Mouse({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      {children(pos)}
    </div>
  );
}

<Mouse>{({ x, y }) => <p>{x}, {y}</p>}</Mouse>
*/
