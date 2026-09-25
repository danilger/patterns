/**
 * @pattern Compound Components
 * @area Frontend / React
 * @sources patterns.dev — Compound Pattern; Addy Osmani Ch.12
 *
 * @description
 * Набор связанных компонентов с общим неявным состоянием
 * (`Tabs` + `Tabs.List` + `Tabs.Panel`, `Select` + `Option`).
 * Потребитель собирает UI декларативно; state живёт в родителе (часто через Context).
 *
 * @when
 * - гибкий API дизайн-системы (меню, табы, аккордеон)
 * - родитель и дети составляют один «виджет»
 */

function createTabs() {
  const state = { active: 0, listeners: new Set() };

  function notify() {
    state.listeners.forEach((fn) => fn(state.active));
  }

  const Tabs = {
    setActive(i) {
      state.active = i;
      notify();
    },
    subscribe(fn) {
      state.listeners.add(fn);
      fn(state.active);
      return () => state.listeners.delete(fn);
    },
  };

  Tabs.Tab = function Tab({ index, label }) {
    return {
      type: "tab",
      index,
      label,
      select: () => Tabs.setActive(index),
    };
  };

  Tabs.Panel = function Panel({ index, content }) {
    return {
      type: "panel",
      index,
      content,
      isActive: () => state.active === index,
    };
  };

  return Tabs;
}

// --- demo ---
const Tabs = createTabs();
const tab0 = Tabs.Tab({ index: 0, label: "Profile" });
const tab1 = Tabs.Tab({ index: 1, label: "Settings" });
const panel0 = Tabs.Panel({ index: 0, content: "Profile body" });
const panel1 = Tabs.Panel({ index: 1, content: "Settings body" });

Tabs.subscribe((i) => {
  console.log("active tab:", i);
  console.log("visible:", panel0.isActive() ? panel0.content : panel1.content);
});

tab1.select();

/** @example React */
/*
function Tabs({ children }) {
  const [active, setActive] = useState(0);
  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}
Tabs.List = function List({ children }) { return <div role="tablist">{children}</div>; };
Tabs.Tab = function Tab({ index, children }) {
  const { active, setActive } = useContext(TabsContext);
  return <button aria-selected={active === index} onClick={() => setActive(index)}>{children}</button>;
};
*/
