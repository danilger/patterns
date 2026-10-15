/**
 * @pattern Singleton (Одиночка)
 * @category Creational
 * @variant functional
 *
 * @description
 * Гарантирует один экземпляр и глобальную точку доступа.
 * В FP / модулях JS — замыкание или один экспорт модуля.
 *
 * @when
 * - нужен единый разделяемый ресурс (логгер, конфиг, пул)
 * - осторожно: скрытая глобальность усложняет тесты
 */

const createDatabase = (() => {
  let instance = null;

  return () => {
    if (!instance) {
      const connectionId = Math.random().toString(36).slice(2, 8);
      instance = {
        query: (sql) => `[${connectionId}] result of: ${sql}`,
      };
    }
    return instance;
  };
})();

// --- demo ---
const db1 = createDatabase();
const db2 = createDatabase();

console.log(db1 === db2); // true
console.log(db1.query("SELECT * FROM users"));
