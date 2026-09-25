/**
 * @pattern Decorator (Декоратор)
 * @category Structural
 *
 * @description
 * Динамически добавляет обязанности объекту, сохраняя его интерфейс.
 * Декораторы можно складывать в цепочку.
 *
 * @todo Реализация ниже
 */

class Notifier {
  send(message) {
    throw new Error("send() must be implemented");
  }
}

class EmailNotifier extends Notifier {
  send(message) {
    return `Email: ${message}`;
  }
}

/** Базовый декоратор — тот же интерфейс, держит wrappee */
class NotifierDecorator extends Notifier {
  constructor(wrappee) {
    super();
    this.wrappee = wrappee;
  }

  send(message) {
    return this.wrappee.send(message);
  }
}

class SmsDecorator extends NotifierDecorator {
  send(message) {
    const base = super.send(message);
    return `${base} | SMS: ${message}`;
  }
}

class SlackDecorator extends NotifierDecorator {
  send(message) {
    const base = super.send(message);
    return `${base} | Slack: ${message}`;
  }
}

// --- demo ---
let notifier = new EmailNotifier();
notifier = new SmsDecorator(notifier);
notifier = new SlackDecorator(notifier);

console.log(notifier.send("Server is down"));
