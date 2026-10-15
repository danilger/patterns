/**
 * @pattern Higher-Order Component (HOC)
 * @area Frontend / React
 * @sources patterns.dev — HOC Pattern; Lydia Hallie (Tour of JS & React Patterns)
 *
 * @description
 * HOC = функция: (Component) => EnhancedComponent.
 * Оборачивает компонент, добавляя cross-cutting поведение (auth, analytics, i18n).
 * По духу близок к Decorator из GoF.
 *
 * @modern
 * Для новой логики чаще берут custom hooks: нет лишнего узла в дереве,
 * проще композиция. HOC всё ещё жив в legacy (`connect`, `withAuth`, `withRouter`).
 *
 * @when
 * - библиотечный API должен обернуть «любой» компонент
 * - error boundary / suspense boundary (нужен компонент-обёртка)
 * - поддержка старого кода на class components
 */

function withLogging(renderFn) {
  return function Logged(props) {
    console.log("render", renderFn.name || "anon", props);
    return renderFn(props);
  };
}

function withDefaultProps(defaults) {
  return function wrap(renderFn) {
    return function WithDefaults(props) {
      return renderFn({ ...defaults, ...props });
    };
  };
}

function UserCard({ name, role }) {
  return `UserCard(${name}, ${role})`;
}

const Enhanced = withLogging(withDefaultProps({ role: "guest" })(UserCard));

// --- demo ---
console.log(Enhanced({ name: "Ann" }));
console.log(Enhanced({ name: "Bob", role: "admin" }));

/** @example React */
/*
function withAuth(Component) {
  return function AuthGuard(props) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" />;
    return <Component {...props} user={user} />;
  };
}

export default withAuth(Dashboard);
*/
