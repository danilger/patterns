/**
 * @pattern CQRS (lite)
 * @area Backend / NestJS
 * @sources @nestjs/cqrs; разделение команд и запросов
 *
 * @description
 * Commands меняют состояние (CreateOrder), Queries только читают (GetOrder).
 * Разные модели/оптимизации для write и read. В Nest — CommandBus / QueryBus.
 *
 * @when сложный домен, разные read-модели, высокая нагрузка на чтение
 * @note для CRUD CRUD-сервиса часто избыточен — не внедряй «для галочки»
 */

class CommandBus {
  constructor() {
    this.handlers = new Map();
  }
  register(type, handler) {
    this.handlers.set(type, handler);
  }
  execute(command) {
    const h = this.handlers.get(command.type);
    if (!h) throw new Error(`No handler for ${command.type}`);
    return h(command);
  }
}

class QueryBus {
  constructor() {
    this.handlers = new Map();
  }
  register(type, handler) {
    this.handlers.set(type, handler);
  }
  execute(query) {
    return this.handlers.get(query.type)(query);
  }
}

const db = { orders: new Map() };
const commands = new CommandBus();
const queries = new QueryBus();

commands.register("CreateOrder", ({ payload }) => {
  const id = String(db.orders.size + 1);
  db.orders.set(id, { id, ...payload });
  return { id };
});

queries.register("GetOrder", ({ payload }) => db.orders.get(payload.id) ?? null);

// --- demo ---
const { id } = commands.execute({
  type: "CreateOrder",
  payload: { total: 42 },
});
console.log(queries.execute({ type: "GetOrder", payload: { id } }));
