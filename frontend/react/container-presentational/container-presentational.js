/**
 * @pattern Container / Presentational
 * @area Frontend / React
 * @sources Lydia Hallie — Tour of JS & React Patterns; patterns.dev
 *
 * @description
 * Разделение: Container (данные, side-effects) и Presentational (только UI).
 * Сегодня часто заменяют связкой: custom hook (данные) + dumb component (UI).
 *
 * @when
 * - хочешь тестировать UI без моков сети
 * - один и тот же view с разными источниками данных
 */

function fetchUsers() {
  return Promise.resolve([
    { id: 1, name: "Ann" },
    { id: 2, name: "Bob" },
  ]);
}

/** Presentational — только props → UI-строка */
function UserListView({ users, loading, error }) {
  if (loading) return "Loading...";
  if (error) return `Error: ${error}`;
  return users.map((u) => u.name).join(", ");
}

/** Container — данные + передача в view */
async function UserListContainer() {
  let loading = true;
  let error = null;
  let users = [];
  try {
    users = await fetchUsers();
  } catch (e) {
    error = e.message;
  } finally {
    loading = false;
  }
  return UserListView({ users, loading, error });
}

// --- demo ---
UserListContainer().then(console.log);

/** @example React (современный вариант) */
/*
function useUsers() {
  const [state, setState] = useState({ users: [], loading: true, error: null });
  useEffect(() => {
    fetchUsers()
      .then(users => setState({ users, loading: false, error: null }))
      .catch(e => setState(s => ({ ...s, loading: false, error: e.message })));
  }, []);
  return state;
}

function UserList() {
  const { users, loading, error } = useUsers();
  return <UserListView users={users} loading={loading} error={error} />;
}
*/
