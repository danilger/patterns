/**
 * @pattern Singleton (Одиночка)
 * @category Creational
 *
 * @description
 * Гарантирует, что у класса есть только один экземпляр, и предоставляет
 * к нему глобальную точку доступа.
 *
 * @todo Реализация ниже
 */

class Database {
  constructor() {
    if (Database._instance) {
      return Database._instance;
    }
    this.connectionId = Math.random().toString(36).slice(2, 8);
    Database._instance = this;
  }

  static getInstance() {
    if (!Database._instance) {
      Database._instance = new Database();
    }
    return Database._instance;
  }

  query(sql) {
    return `[${this.connectionId}] result of: ${sql}`;
  }
}

// --- demo ---
const db1 = Database.getInstance();
const db2 = Database.getInstance();
const db3 = new Database();

console.log(db1 === db2); // true
console.log(db1 === db3); // true
console.log(db1.query("SELECT * FROM users"));
