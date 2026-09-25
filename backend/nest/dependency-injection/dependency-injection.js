/**
 * @pattern Dependency Injection (IoC)
 * @area Backend / NestJS
 * @sources NestJS core; GoF «не new внутри, а инъекция»
 *
 * @description
 * Nest IoC-контейнер создаёт и связывает провайдеры. Класс объявляет зависимости
 * в конструкторе — фреймворк подставляет реализации. Легко мокать в тестах.
 *
 * В «голом» JS DI нет — это то, зачем берут Nest/Angular-like DI.
 *
 * @when всегда в Nest; не делай `new OrdersRepository()` внутри сервиса
 */

class Container {
  constructor() {
    this.ctors = new Map();
    this.singletons = new Map();
  }
  register(token, ctor) {
    this.ctors.set(token, ctor);
  }
  get(token) {
    if (this.singletons.has(token)) return this.singletons.get(token);
    const Ctor = this.ctors.get(token);
    const instance = new Ctor(this);
    this.singletons.set(token, instance);
    return instance;
  }
}

class Mailer {
  send(to, body) {
    return `mail→${to}: ${body}`;
  }
}

class UsersService {
  constructor(container) {
    this.mailer = container.get("Mailer");
  }
  welcome(email) {
    return this.mailer.send(email, "Welcome!");
  }
}

// --- demo ---
const c = new Container();
c.register("Mailer", Mailer);
c.register("UsersService", UsersService);
console.log(c.get("UsersService").welcome("a@b.c"));

/** @example NestJS */
/*
@Injectable()
export class UsersService {
  constructor(private readonly mailer: MailerService) {}
}
*/
