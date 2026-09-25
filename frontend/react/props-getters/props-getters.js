/**
 * @pattern Props Getters / Prop Collections
 * @area Frontend / React
 * @sources Kent C. Dodds — Prop Collections & Getters; Addy Osmani Ch.12
 *
 * @description
 * Хук/компонент отдаёт готовые наборы props (`getTogglerProps()`), чтобы
 * потребитель склеивал их с своими без знания внутренней логики.
 * Prop Collections — объект props; Getters — функции, мержащие caller's props.
 *
 * @when
 * - reusable hooks (toggle, combobox) с гибким DOM API
 * - нужно пробросить onClick/aria без ломки пользовательских handlers
 */

function callAll(...fns) {
  return (...args) => {
    fns.forEach((fn) => fn && fn(...args));
  };
}

function createToggle() {
  let on = false;
  const listeners = new Set();

  function setOn(next) {
    on = next;
    listeners.forEach((fn) => fn(on));
  }

  return {
    get on() {
      return on;
    },
    subscribe(fn) {
      listeners.add(fn);
      fn(on);
      return () => listeners.delete(fn);
    },
    /** Prop collection */
    togglerProps: {
      "aria-pressed": false,
      onClick() {
        setOn(!on);
      },
    },
    /** Prop getter — merges consumer props safely */
    getTogglerProps({ onClick, ...rest } = {}) {
      const props = {
        ...rest,
        onClick: callAll(onClick, () => setOn(!on)),
      };
      Object.defineProperty(props, "aria-pressed", {
        enumerable: true,
        get: () => on,
      });
      return props;
    },
  };
}

// --- demo ---
const toggle = createToggle();
toggle.subscribe((on) => console.log("on:", on));

const props = toggle.getTogglerProps({
  onClick: () => console.log("consumer onClick"),
  id: "btn",
});
props.onClick();
console.log("merged id:", props.id, "aria:", props["aria-pressed"]);
