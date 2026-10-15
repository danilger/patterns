/**
 * @pattern Guard
 * @area Backend / NestJS
 * @sources NestJS Guards; authz best practices
 *
 * @description
 * Guard решает: пустить request дальше или нет (authn/authz).
 * Выполняется до pipe/interceptor business path. Близок к Chain of Responsibility.
 *
 * @when JWT auth, roles, API keys, feature flags на уровне route
 */

function createGuardPipeline(guards) {
  return async function run(context) {
    for (const guard of guards) {
      const ok = await guard.canActivate(context);
      if (!ok) return { status: 403, body: "Forbidden" };
    }
    return context.handler(context);
  };
}

const AuthGuard = {
  canActivate(ctx) {
    return Boolean(ctx.user);
  },
};

const AdminGuard = {
  canActivate(ctx) {
    return ctx.user?.role === "admin";
  },
};

const pipeline = createGuardPipeline([AuthGuard, AdminGuard]);

// --- demo ---
(async () => {
  const handler = () => ({ status: 200, body: "secret" });
  console.log(await pipeline({ user: null, handler }));
  console.log(await pipeline({ user: { role: "user" }, handler }));
  console.log(await pipeline({ user: { role: "admin" }, handler }));
})();

/** @example NestJS */
/*
@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    return req.user?.role === 'admin';
  }
}

@UseGuards(JwtAuthGuard, RolesGuard)
@Get('admin')
adminOnly() { return 'ok'; }
*/
