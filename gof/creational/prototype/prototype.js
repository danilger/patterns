/**
 * @pattern Prototype (Прототип)
 * @category Creational
 *
 * @description
 * Создаёт новые объекты путём копирования (клонирования) существующего
 * экземпляра-прототипа.
 *
 * @todo Реализация ниже
 */

class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  clone() {
    throw new Error("clone() must be implemented");
  }
}

class Rectangle extends Shape {
  constructor(x, y, color, width, height) {
    super(x, y, color);
    this.width = width;
    this.height = height;
  }

  clone() {
    return new Rectangle(this.x, this.y, this.color, this.width, this.height);
  }

  describe() {
    return `Rectangle(${this.x},${this.y}) ${this.width}x${this.height} ${this.color}`;
  }
}

class Circle extends Shape {
  constructor(x, y, color, radius) {
    super(x, y, color);
    this.radius = radius;
  }

  clone() {
    return new Circle(this.x, this.y, this.color, this.radius);
  }

  describe() {
    return `Circle(${this.x},${this.y}) r=${this.radius} ${this.color}`;
  }
}

// --- demo ---
const prototypes = {
  bigRedRect: new Rectangle(0, 0, "red", 100, 50),
  smallBlueCircle: new Circle(10, 10, "blue", 15),
};

const rectCopy = prototypes.bigRedRect.clone();
rectCopy.x = 20;
rectCopy.color = "green";

const circleCopy = prototypes.smallBlueCircle.clone();
circleCopy.radius = 30;

console.log(prototypes.bigRedRect.describe());
console.log(rectCopy.describe());
console.log(prototypes.smallBlueCircle.describe());
console.log(circleCopy.describe());
