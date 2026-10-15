/**
 * @pattern Provider (Context)
 * @area Frontend / React
 * @sources patterns.dev — Provider Pattern; Addy Osmani Ch.12 (Provider)
 *
 * @description
 * Provider кладёт данные в Context, чтобы глубокие потомки читали их
 * без prop drilling. В React: createContext + Provider + useContext.
 *
 * Ближайший GoF-аналог — смесь Mediator / Observer для дерева UI.
 *
 * @when
 * - theme, locale, auth user, feature flags
 * - данные нужны многим веткам дерева
 *
 * @caveats
 * - слишком частые обновления value → лишние ререндеры
 * - дроби контексты / мемоизируй value
 */

function createProvider(initial) {
  let value = initial;
  const listeners = new Set();

  return {
    Provider: {
      set(next) {
        value = typeof next === "function" ? next(value) : next;
        listeners.forEach((fn) => fn(value));
      },
      get() {
        return value;
      },
    },
    useContext(fn) {
      listeners.add(fn);
      fn(value);
      return () => listeners.delete(fn);
    },
  };
}

const Theme = createProvider({ mode: "dark" });

// --- demo ---
Theme.useContext((v) => console.log("theme:", v.mode));
Theme.Provider.set({ mode: "light" });

/** @example React */
/*
const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme outside Provider");
  return ctx;
}
*/
