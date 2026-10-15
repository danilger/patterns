/**
 * @pattern Suspense Boundary
 * @area Frontend / React
 * @sources React docs — Suspense; related to Streaming SSR / lazy
 *
 * @description
 * Граница объявляет fallback, пока потомки «ждут» (lazy import, data с
 * Suspense-совместимым API). UI не блокирует всё дерево — показывается
 * placeholder до готовности. Не путать с Error Boundary (ошибки ≠ pending).
 *
 * @when
 * - code-splitting с React.lazy
 * - потоковый SSR / частичный показ страницы
 * - данные через Suspense-enabled fetch (React 19+ / libraries)
 */

function createLazy(factory) {
  let status = "pending";
  let result;
  const promise = Promise.resolve().then(() => factory()).then(
    (value) => {
      status = "ok";
      result = value;
    },
    (err) => {
      status = "error";
      result = err;
    },
  );

  return function LazyComponent() {
    if (status === "pending") throw promise; // Suspense protocol
    if (status === "error") throw result;
    return result;
  };
}

function createSuspense({ fallback }) {
  return {
    async render(childFn) {
      try {
        return childFn();
      } catch (thrown) {
        if (thrown && typeof thrown.then === "function") {
          console.log("showing fallback:", fallback);
          await thrown;
          return childFn();
        }
        throw thrown;
      }
    },
  };
}

// --- demo ---
const Chart = createLazy(() => ({ type: "Chart", ready: true }));
const suspense = createSuspense({ fallback: "Loading chart…" });

suspense.render(() => Chart()).then((ui) => console.log("resolved:", ui));
