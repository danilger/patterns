/**
 * @pattern Prototype (Прототип)
 * @category Creational
 * @variant functional
 *
 * @description
 * Создаёт новые объекты копированием существующего прототипа.
 * В FP — чистая функция clone / structuredClone / spread.
 *
 * @when
 * - клонирование дешевле полной инициализации
 * - нужен реестр готовых «заготовок»
 */

const cloneShape = (shape) => structuredClone(shape);

const describe = (shape) => {
  if (shape.kind === "rectangle") {
    return `Rectangle(${shape.x},${shape.y}) ${shape.width}x${shape.height} ${shape.color}`;
  }
  return `Circle(${shape.x},${shape.y}) r=${shape.radius} ${shape.color}`;
};

// --- demo ---
const prototypes = {
  bigRedRect: { kind: "rectangle", x: 0, y: 0, color: "red", width: 100, height: 50 },
  smallBlueCircle: { kind: "circle", x: 10, y: 10, color: "blue", radius: 15 },
};

const rectCopy = { ...cloneShape(prototypes.bigRedRect), x: 20, color: "green" };
const circleCopy = { ...cloneShape(prototypes.smallBlueCircle), radius: 30 };

console.log(describe(prototypes.bigRedRect));
console.log(describe(rectCopy));
console.log(describe(prototypes.smallBlueCircle));
console.log(describe(circleCopy));
