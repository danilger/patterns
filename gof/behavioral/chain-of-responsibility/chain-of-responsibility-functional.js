/**
 * @pattern Chain of Responsibility (Цепочка обязанностей)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Запрос идёт по цепочке обработчиков, пока один не ответит.
 * В FP — массив handler-функций + reduce / ранний выход.
 *
 * @when
 * - несколько потенциальных обработчиков, клиент не знает кто ответит
 */

const authHandler = (request) =>
  !request.user ? "401 Unauthorized" : null;

const roleHandler = (request) =>
  request.user.role !== "admin" ? "403 Forbidden" : null;

const validationHandler = (request) =>
  !request.body ? "400 Bad Request" : null;

const businessHandler = (request) =>
  `200 OK: processed for ${request.user.name}`;

const createChain = (...handlers) => (request) => {
  for (const handler of handlers) {
    const result = handler(request);
    if (result != null) return result;
  }
  return null;
};

const handle = createChain(
  authHandler,
  roleHandler,
  validationHandler,
  businessHandler
);

// --- demo ---
console.log(handle({ user: null, body: {} }));
console.log(handle({ user: { name: "Ann", role: "user" }, body: {} }));
console.log(handle({ user: { name: "Bob", role: "admin" }, body: null }));
console.log(handle({ user: { name: "Bob", role: "admin" }, body: { x: 1 } }));
