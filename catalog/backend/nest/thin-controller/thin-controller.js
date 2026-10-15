/**
 * @pattern Thin Controller / Application Service (Facade)
 * @area Backend / NestJS
 * @sources Nest best practices — controllers HTTP-only, services = use-cases
 *
 * @description
 * Controller: HTTP mapping (status, DTO in/out).
 * Service: orchestration use-case (фасад над repo + mailer + events).
 * Не путать с GoF Facade подсистемы — здесь «application facade» / use-case.
 *
 * @when всегда; бизнес-логика не должна жить в @Controller
 */

class OrdersRepository {
  save(order) {
    return { id: 1, ...order };
  }
}

class Mailer {
  send(to, text) {
    console.log(`mail ${to}: ${text}`);
  }
}

class OrdersService {
  constructor(repo, mailer) {
    this.repo = repo;
    this.mailer = mailer;
  }
  create({ userEmail, total }) {
    if (total <= 0) throw new Error("Invalid total");
    const order = this.repo.save({ total, status: "new" });
    this.mailer.send(userEmail, `Order ${order.id} created`);
    return order;
  }
}

class OrdersController {
  constructor(service) {
    this.service = service;
  }
  create(body) {
    // только HTTP-граница
    const order = this.service.create(body);
    return { status: 201, body: order };
  }
}

// --- demo ---
const controller = new OrdersController(
  new OrdersService(new OrdersRepository(), new Mailer())
);
console.log(controller.create({ userEmail: "a@b.c", total: 20 }));
