/**
 * @pattern Strategy (Auth / Passport)
 * @area Backend / NestJS
 * @sources NestJS Passport integration; GoF Strategy — встроен в Nest auth
 *
 * @description
 * Разные способы аутентификации (JWT, Local, OAuth) — взаимозаменяемые Strategy.
 * Guard выбирает стратегию; алгоритм проверки изолирован.
 *
 * @when login/password, JWT bearer, Google/GitHub OAuth рядом в одном API
 */

class AuthContext {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  authenticate(credentials) {
    return this.strategy.validate(credentials);
  }
}

const LocalStrategy = {
  name: "local",
  validate({ email, password }) {
    return email === "a@b.c" && password === "secret"
      ? { userId: 1 }
      : null;
  },
};

const JwtStrategy = {
  name: "jwt",
  validate({ token }) {
    return token === "valid.jwt" ? { userId: 1 } : null;
  },
};

// --- demo ---
const auth = new AuthContext(LocalStrategy);
console.log("local", auth.authenticate({ email: "a@b.c", password: "secret" }));
auth.setStrategy(JwtStrategy);
console.log("jwt", auth.authenticate({ token: "valid.jwt" }));

/** @example NestJS */
/*
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() { super({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: '...' }); }
  validate(payload) { return { userId: payload.sub }; }
}
*/
