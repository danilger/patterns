/**
 * @pattern Interceptor
 * @area Backend / NestJS
 * @sources NestJS Interceptors
 *
 * @description
 * Перехватывает request/response: логирование, transform, timeout, cache,
 * map ошибок. По духу — Decorator / AOP вокруг handler.
 *
 * @when единообразно обернуть ответ `{ data }`, логировать duration, caching
 */

function withInterceptor(interceptor, handler) {
  return async (ctx) => interceptor.intercept(ctx, () => handler(ctx));
}

const LoggingInterceptor = {
  async intercept(ctx, next) {
    const t0 = Date.now();
    const result = await next();
    console.log(`${ctx.method} ${ctx.url} ${Date.now() - t0}ms`);
    return result;
  },
};

const TransformInterceptor = {
  async intercept(_ctx, next) {
    const data = await next();
    return { data };
  },
};

// --- demo ---
(async () => {
  const handler = async () => ({ id: 1 });
  const pipeline = withInterceptor(
    LoggingInterceptor,
    withInterceptor(TransformInterceptor, handler)
  );
  console.log(await pipeline({ method: "GET", url: "/users" }));
})();

/** @example NestJS */
/*
@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(map(data => ({ data })));
  }
}
*/
