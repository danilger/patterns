/**
 * @pattern State Reducer
 * @area Frontend / React
 * @sources Addy Osmani Ch.12 — State Reducer Pattern; Kent C. Dodds (origin)
 *
 * @description
 * Компонент/хук принимает optional `reducer`, чтобы потребитель контролировал
 * переходы state (инверсия контроля). Внутренний state + внешняя политика изменений.
 *
 * @when
 * - библиотечный хук/виджет (toggle, downshift-like)
 * - нужно дать escape hatch без форка логики
 */

function toggleReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { on: !state.on };
    case "on":
      return { on: true };
    case "off":
      return { on: false };
    default:
      return state;
  }
}

function createToggle({ reducer = toggleReducer } = {}) {
  let state = { on: false };
  return {
    getState: () => state,
    dispatch(action) {
      state = reducer(state, action);
      return state;
    },
  };
}

// потребитель запрещает выключать
function lockedOnReducer(state, action) {
  const next = toggleReducer(state, action);
  if (state.on && action.type === "toggle") return state;
  return next;
}

// --- demo ---
const plain = createToggle();
console.log(plain.dispatch({ type: "toggle" }));

const locked = createToggle({ reducer: lockedOnReducer });
locked.dispatch({ type: "on" });
console.log("locked toggle:", locked.dispatch({ type: "toggle" })); // останется on
