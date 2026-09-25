/**
 * @pattern Visitor (Посетитель)
 * @category Behavioral
 *
 * @description
 * Добавляет новые операции над объектами структуры, не меняя классы
 * этих объектов. Element принимает Visitor через accept().
 *
 * @todo Реализация ниже
 */

class ShapeVisitor {
  visitCircle(circle) {
    throw new Error("visitCircle() must be implemented");
  }
  visitRectangle(rectangle) {
    throw new Error("visitRectangle() must be implemented");
  }
}

class Shape {
  accept(visitor) {
    throw new Error("accept() must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  accept(visitor) {
    return visitor.visitCircle(this);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  accept(visitor) {
    return visitor.visitRectangle(this);
  }
}

class AreaVisitor extends ShapeVisitor {
  visitCircle(circle) {
    return Math.PI * circle.radius ** 2;
  }
  visitRectangle(rectangle) {
    return rectangle.width * rectangle.height;
  }
}

class XmlExportVisitor extends ShapeVisitor {
  visitCircle(circle) {
    return `<circle radius="${circle.radius}" />`;
  }
  visitRectangle(rectangle) {
    return `<rectangle w="${rectangle.width}" h="${rectangle.height}" />`;
  }
}

// --- demo ---
const shapes = [new Circle(10), new Rectangle(4, 5), new Circle(2)];
const area = new AreaVisitor();
const xml = new XmlExportVisitor();

for (const shape of shapes) {
  console.log("area:", shape.accept(area).toFixed(2));
  console.log("xml:", shape.accept(xml));
}
