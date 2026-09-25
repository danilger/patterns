/**
 * @pattern Custom Hooks
 * @area Frontend / React
 * @sources patterns.dev — Hooks Pattern; Addy Osmani Ch.12 (Custom Hooks)
 *
 * @description
 * Custom hook = функция с именем `use…`, внутри которой вызываются другие хуки.
 * Это главный современный способ шарить логику во React (вместо HOC/render props).
 *
 * @when
 * - одна и та же связка state+effect нужна в нескольких компонентах
 * - компонент «засорился» глаголами: fetch, debounce, sync — выноси в useX
 *
 * @examples useDebounce, useLocalStorage, useMediaQuery, useAuth
 */

/** Plain-JS: фабрика переиспользуемой «логики» (аналог custom hook) */
function useToggle(initial = false) {
  let value = initial;
  const listeners = new Set();

  return {
    get isOn() {
      return value;
    },
    toggle() {
      value = !value;
      listeners.forEach((fn) => fn(value));
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}

function useLocalStorage(key, initial) {
  let value =
    typeof globalThis.localStorage !== "undefined"
      ? JSON.parse(globalThis.localStorage.getItem(key) || "null") ?? initial
      : initial;

  return {
    get() {
      return value;
    },
    set(next) {
      value = next;
      if (typeof globalThis.localStorage !== "undefined") {
        globalThis.localStorage.setItem(key, JSON.stringify(value));
      }
    },
  };
}

/** @example React */
/*
function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = () => setOn(v => !v);
  return { on, toggle };
}

function Menu() {
  const { on, toggle } = useToggle();
  return <button onClick={toggle}>{on ? "Open" : "Closed"}</button>;
}
*/

// --- demo ---
const menu = useToggle(false);
menu.subscribe((v) => console.log("menu open:", v));
menu.toggle();
menu.toggle();

const theme = useLocalStorage("theme", "dark");
theme.set("light");
console.log("theme:", theme.get());
