/**
 * @pattern Lifting State Up
 * @area Frontend / React
 * @sources Addy Osmani — Learning JavaScript Design Patterns, Ch.12
 *
 * @description
 * Если двум sibling-компонентам нужно одно состояние — поднимаешь его
 * к ближайшему общему родителю и передаёшь вниз через props.
 *
 * @when
 * - два ребёнка должны быть синхронизированы
 * - state ещё не «глобальный» (иначе Provider/store)
 */

function createTemperatureApp() {
  let celsius = 0;
  const listeners = new Set();

  function notify() {
    listeners.forEach((fn) => fn(getState()));
  }

  function getState() {
    return {
      celsius,
      fahrenheit: (celsius * 9) / 5 + 32,
    };
  }

  return {
    subscribe(fn) {
      listeners.add(fn);
      fn(getState());
      return () => listeners.delete(fn);
    },
    setCelsius(v) {
      celsius = Number(v);
      notify();
    },
    setFahrenheit(v) {
      celsius = ((Number(v) - 32) * 5) / 9;
      notify();
    },
  };
}

// --- demo ---
const app = createTemperatureApp();
app.subscribe((s) =>
  console.log(`C=${s.celsius.toFixed(1)} F=${s.fahrenheit.toFixed(1)}`)
);
app.setCelsius(25);
app.setFahrenheit(86);

/** @example React */
/*
function Calculator() {
  const [c, setC] = useState(0);
  return (
    <>
      <CelsiusInput value={c} onChange={setC} />
      <FahrenheitInput
        value={(c * 9) / 5 + 32}
        onChange={(f) => setC(((f - 32) * 5) / 9)}
      />
    </>
  );
}
*/
