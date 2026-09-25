/**
 * @pattern Hooks
 * @area Frontend / React
 * @sources
 * - Lydia Hallie & Addy Osmani — patterns.dev (Hooks Pattern)
 * - Addy Osmani — Learning JavaScript Design Patterns, Ch.12
 *
 * @description
 * Хук — функция, которая даёт компоненту state, эффекты и другой React API
 * без классов. Главная ценность — вынести stateful-логику в переиспользуемые
 * функции (custom hooks), без лишних узлов в дереве (в отличие от HOC/render props).
 *
 * В JS/React это «нативный» способ делать то, ради чего раньше тянули
 * Observer/Decorator/HOC обёртки.
 *
 * @when
 * - нужен локальный state / effects в function component
 * - хочешь переиспользовать логику между компонентами
 * - новый код (предпочтение вместо HOC и render props)
 *
 * @note React-код ниже — справочный пример (нужен React runtime).
 */

/** @example React */
/*
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
*/

/** Plain-JS аналог идеи: замкнутое состояние + подписка */
function createCounter() {
  let count = 0;
  const listeners = new Set();

  return {
    get() {
      return count;
    },
    set(next) {
      count = typeof next === "function" ? next(count) : next;
      listeners.forEach((fn) => fn(count));
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}

// --- demo ---
const counter = createCounter();
counter.subscribe((v) => console.log("count:", v));
counter.set(1);
counter.set((c) => c + 1);
