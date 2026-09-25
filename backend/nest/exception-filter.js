/**
 * @pattern Exception Filter
 * @area Backend / NestJS
 * @sources NestJS Exception Filters
 *
 * @description
 * Централизованный маппинг ошибок → HTTP response.
 * Business code кидает доменные/Nest exceptions; filter формирует JSON.
 *
 * @when единый формат ошибок API; не try/catch в каждом controller method
 */

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function exceptionFilter(handler) {
  return async (ctx) => {
    try {
      return await handler(ctx);
    } catch (e) {
      const status = e.status || 500;
      return {
        status,
        body: {
          statusCode: status,
          message: e.message || "Internal error",
          path: ctx.url,
        },
      };
    }
  };
}

// --- demo ---
(async () => {
  const ok = exceptionFilter(async () => ({ status: 200, body: { ok: true } }));
  const fail = exceptionFilter(async () => {
    throw new HttpError(404, "User not found");
  });
  console.log(await ok({ url: "/ok" }));
  console.log(await fail({ url: "/users/9" }));
})();

/** @example NestJS */
/*
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const res = host.switchToHttp().getResponse();
    // map exception → res.status().json(...)
  }
}
*/
