/**
 * @pattern Domain Events (Observer)
 * @area Backend / NestJS
 * @sources Nest EventEmitter / @nestjs/cqrs events; GoF Observer
 *
 * @description
 * Сервис публикует событие («OrderPaid»), слушатели реагируют
 * (отправить mail, списать лояльность) без жёсткой связки.
 *
 * @when side-effects после бизнес-действия; развязка модулей
 */

class EventBus {
  constructor() {
    this.handlers = new Map();
  }
  on(event, handler) {
    if (!this.handlers.has(event)) this.handlers.set(event, []);
    this.handlers.get(event).push(handler);
  }
  emit(event, payload) {
    for (const h of this.handlers.get(event) || []) h(payload);
  }
}

const bus = new EventBus();
bus.on("user.created", (u) => console.log("send welcome mail to", u.email));
bus.on("user.created", (u) => console.log("analytics track signup", u.id));

function createUser(email) {
  const user = { id: Date.now(), email };
  bus.emit("user.created", user);
  return user;
}

// --- demo ---
createUser("ann@example.com");

/** @example NestJS */
/*
// publisher
this.eventEmitter.emit('user.created', { id, email });

@OnEvent('user.created')
handleUserCreated(payload) { ... }
*/
