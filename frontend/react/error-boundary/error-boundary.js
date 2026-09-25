/**
 * @pattern Error Boundary
 * @area Frontend / React
 * @sources React docs — Error Boundaries
 *
 * @description
 * Граница ловит ошибки рендера в поддереве и показывает fallback UI вместо
 * падения всего приложения. В React — class с getDerivedStateFromError /
 * componentDidCatch (или библиотеки-обёртки). Хуки ошибок рендера не ловят.
 *
 * @when
 * - изолировать виджет/маршрут от краша соседей
 * - показать «что-то сломалось» + логирование
 */

function createErrorBoundary({ fallback, onError } = {}) {
  let hasError = false;
  let error = null;

  return {
    /** simulate rendering a child that may throw */
    render(childFn) {
      if (hasError) {
        return typeof fallback === "function" ? fallback(error) : fallback;
      }
      try {
        return childFn();
      } catch (err) {
        hasError = true;
        error = err;
        onError?.(err);
        return typeof fallback === "function" ? fallback(err) : fallback;
      }
    },
    reset() {
      hasError = false;
      error = null;
    },
  };
}

// --- demo ---
const boundary = createErrorBoundary({
  fallback: (err) => `Fallback: ${err.message}`,
  onError: (err) => console.log("logged:", err.message),
});

console.log(
  boundary.render(() => {
    throw new Error("Child crashed");
  }),
);

boundary.reset();
console.log(boundary.render(() => "OK child"));
