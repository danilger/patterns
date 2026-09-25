/**
 * @pattern Chain of Responsibility (Цепочка обязанностей)
 * @category Behavioral
 *
 * @description
 * Передаёт запрос по цепочке обработчиков, пока один из них его не обработает.
 *
 * @todo Реализация ниже
 */

class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }
    return null;
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (!request.user) {
      return "401 Unauthorized";
    }
    return super.handle(request);
  }
}

class RoleHandler extends Handler {
  handle(request) {
    if (request.user.role !== "admin") {
      return "403 Forbidden";
    }
    return super.handle(request);
  }
}

class ValidationHandler extends Handler {
  handle(request) {
    if (!request.body) {
      return "400 Bad Request";
    }
    return super.handle(request);
  }
}

class BusinessHandler extends Handler {
  handle(request) {
    return `200 OK: processed for ${request.user.name}`;
  }
}

// --- demo ---
const auth = new AuthHandler();
auth
  .setNext(new RoleHandler())
  .setNext(new ValidationHandler())
  .setNext(new BusinessHandler());

console.log(auth.handle({ user: null, body: {} }));
console.log(auth.handle({ user: { name: "Ann", role: "user" }, body: {} }));
console.log(auth.handle({ user: { name: "Bob", role: "admin" }, body: null }));
console.log(auth.handle({ user: { name: "Bob", role: "admin" }, body: { x: 1 } }));
