# Guard

**Область:** Backend / NestJS

**Источники:** NestJS Guards; authz best practices

## Смысл паттерна

**Guard** отвечает на вопрос: **можно ли выполнить этот route/handler?** Аутентификация (есть ли user), авторизация (роль admin), API key, feature flag — до того, как запрос дойдёт до pipes, interceptors и business logic.

Guards выполняются **раньше** handler в Nest lifecycle. Возвращают `true` / `false` или бросают `ForbiddenException`. Несколько guards на route образуют цепочку — все должны пропустить.

## Как устроено демо

Файл `guard.js`:

1. **`createGuardPipeline(guards)`** — последовательно вызывает `guard.canActivate(context)`; при `false` — `{ status: 403, body: "Forbidden" }`.
2. **`AuthGuard`** — пропускает только если `ctx.user` truthy.
3. **`AdminGuard`** — требует `ctx.user.role === "admin"`.
4. Pipeline: `[AuthGuard, AdminGuard]` → затем `context.handler(context)`.

Демо три сценария:

- `user: null` → 403 (не прошёл AuthGuard).
- `user: { role: "user" }` → 403 (AuthGuard ok, AdminGuard нет).
- `user: { role: "admin" }` → 200 `{ body: "secret" }`.

В Nest: `@UseGuards(JwtAuthGuard, RolesGuard)` на controller/method; `CanActivate` + `ExecutionContext`.

## Когда применять

- JWT / session auth на уровне route или controller.
- RBAC: roles, permissions, policies.
- API keys для internal/partner endpoints.
- Feature flags («beta только для staff»).

Не дублируйте проверки роли внутри каждого service method — guard на границе HTTP.

## Связь с GoF / другими Nest-паттернами

| Связь | Пояснение |
|-------|-----------|
| **Chain of Responsibility** | Guards идут цепочкой до handler. |
| **Strategy (Auth)** | JwtAuthGuard делегирует конкретной Passport strategy. |
| **Interceptor** | Guard — до business path; interceptor — оборачивает handler. |
| **DTO + Validation** | Guard проверяет *кто*; Pipe — *что* в body. |
| **Thin Controller** | Controller не проверяет JWT вручную. |

Decorator `@UseGuards` — declarative security на уровне метаданных route.

## Краткий итог

Guard = gatekeeper маршрута. Authn/authz до сервиса. Комбинируйте JwtAuthGuard + RolesGuard; бизнес-логика остаётся чистой.
