# Strategy (Auth / Passport)

**Область:** Backend / NestJS

**Источники:** NestJS Passport integration; GoF Strategy — встроен в Nest auth

## Смысл паттерна

**Strategy** — семейство взаимозаменяемых алгоритмов под одним интерфейсом. В Nest auth это **Passport strategies**: Local (email/password), JWT (Bearer token), OAuth2 (Google, GitHub) — каждая изолирована в своём классе с методом `validate`.

**AuthGuard** (например `AuthGuard('jwt')`) выбирает стратегию по имени. Контекст (`AuthContext` в демо) делегирует `authenticate(credentials)` текущей strategy. Добавить OAuth — новый strategy class, без переписывания guard pipeline.

## Как устроено демо

Файл `strategy-auth.js`:

1. **`AuthContext`** — хранит `strategy`, `setStrategy(s)`, `authenticate(credentials)` → `strategy.validate(...)`.
2. **`LocalStrategy`** — `validate({ email, password })` → `{ userId: 1 }` или `null`.
3. **`JwtStrategy`** — `validate({ token })` → user при `token === "valid.jwt"`.

Демо:

- Старт с Local → успех для `a@b.c` / `secret`.
- `setStrategy(JwtStrategy)` → успех для token `valid.jwt`.

В Nest: `JwtStrategy extends PassportStrategy(Strategy)` + `validate(payload)`; `@UseGuards(AuthGuard('jwt'))`.

## Когда применять

- Несколько способов входа в одном API (login form + API JWT + social OAuth).
- Разные clients: web session vs mobile bearer.
- Нужно тестировать auth изолированно (mock strategy).
- Миграция с local-only на JWT без ломки controllers.

Strategy регистрируется как `@Injectable()` provider в AuthModule.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **GoF Strategy** | Взаимозаменяемые алгоритмы validate без if/else в guard. |
| **Guard** | Guard orchestrates; strategy implements check. |
| **Dependency Injection** | Strategies — providers в AuthModule. |
| **Thin Controller** | `@Post('login')` + `@UseGuards(LocalAuthGuard)` — без логики пароля в controller. |
| **Adapter** | OAuth strategy адаптирует внешний IdP к `{ userId }`. |

Passport — de-facto standard для Nest; не изобретайте свой auth pipeline с нуля без причины.

## Краткий итог

Один guard — много strategies. Local, JWT, OAuth — отдельные классы с `validate`. Смена алгоритма = смена strategy, не controller.
