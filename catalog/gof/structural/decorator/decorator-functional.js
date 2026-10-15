/**
 * @pattern Decorator (Декоратор)
 * @category Structural
 * @variant functional
 *
 * @description
 * Динамически добавляет обязанности, сохраняя интерфейс.
 * В FP — композиция функций / higher-order wrappers.
 *
 * @when
 * - поведение наращивается слоями без взрыва подклассов
 */

const emailNotifier = (message) => `Email: ${message}`;

const withSms = (send) => (message) => `${send(message)} | SMS: ${message}`;
const withSlack = (send) => (message) => `${send(message)} | Slack: ${message}`;

const compose =
  (...decorators) =>
  (base) =>
    decorators.reduceRight((acc, decorate) => decorate(acc), base);

// --- demo ---
// цепочка как в class-варианте: Email → SMS → Slack
const notifier = compose(withSlack, withSms)(emailNotifier);

console.log(notifier("Server is down"));