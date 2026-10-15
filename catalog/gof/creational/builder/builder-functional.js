/**
 * @pattern Builder (Строитель)
 * @category Creational
 * @variant functional
 *
 * @description
 * Отделяет конструирование сложного объекта от его представления.
 * В FP — замыкание с fluent-методами или цепочка чистых шагов.
 *
 * @when
 * - объект собирается из многих опциональных частей
 * - один процесс сборки даёт разные представления
 */

const createBurgerBuilder = () => {
  let parts = [];

  const builder = {
    addBun: () => {
      parts = [...parts, "bun"];
      return builder;
    },
    addPatty: () => {
      parts = [...parts, "patty"];
      return builder;
    },
    addCheese: () => {
      parts = [...parts, "cheese"];
      return builder;
    },
    addSalad: () => {
      parts = [...parts, "salad"];
      return builder;
    },
    getResult: () => {
      const burger = { parts, describe: () => `Burger: ${parts.join(", ")}` };
      parts = [];
      return burger;
    },
  };

  return builder;
};

/** Director — готовые «рецепты» */
const makeClassic = (builder) =>
  builder.addBun().addPatty().addCheese().addBun().getResult();

const makeVeggie = (builder) =>
  builder.addBun().addSalad().addCheese().addBun().getResult();

// --- demo ---
const builder = createBurgerBuilder();

console.log(makeClassic(builder).describe());
console.log(makeVeggie(builder).describe());

// можно собирать и без Director
const custom = builder.addBun().addPatty().addSalad().addBun().getResult();
console.log(custom.describe());
