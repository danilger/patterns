/**
 * @pattern Builder (Строитель)
 * @category Creational
 *
 * @description
 * Отделяет конструирование сложного объекта от его представления.
 * Один и тот же процесс сборки может давать разные результаты.
 *
 * @todo Реализация ниже
 */

class Burger {
  constructor() {
    this.parts = [];
  }

  add(part) {
    this.parts.push(part);
  }

  describe() {
    return `Burger: ${this.parts.join(", ")}`;
  }
}

class BurgerBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.burger = new Burger();
  }

  addBun() {
    this.burger.add("bun");
    return this;
  }

  addPatty() {
    this.burger.add("patty");
    return this;
  }

  addCheese() {
    this.burger.add("cheese");
    return this;
  }

  addSalad() {
    this.burger.add("salad");
    return this;
  }

  getResult() {
    const result = this.burger;
    this.reset();
    return result;
  }
}

/** Director задаёт готовые «рецепты» сборки */
class BurgerDirector {
  constructor(builder) {
    this.builder = builder;
  }

  makeClassic() {
    return this.builder.addBun().addPatty().addCheese().addBun().getResult();
  }

  makeVeggie() {
    return this.builder.addBun().addSalad().addCheese().addBun().getResult();
  }
}

// --- demo ---
const builder = new BurgerBuilder();
const director = new BurgerDirector(builder);

console.log(director.makeClassic().describe());
console.log(director.makeVeggie().describe());

// можно собирать и без Director
const custom = builder.addBun().addPatty().addSalad().addBun().getResult();
console.log(custom.describe());
