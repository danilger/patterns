/**
 * @pattern Visitor (Посетитель)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Новые операции над структурой без изменения её узлов.
 * В FP — dispatch по kind + таблица visit-функций.
 *
 * @when
 * - операции добавляются чаще, чем типы элементов
 */

const circle = (radius) => ({ kind: "circle", radius });
const rectangle = (width, height) => ({ kind: "rectangle", width, height });

const accept = (shape, visitor) => visitor[shape.kind](shape);

const areaVisitor = {
  circle: (c) => Math.PI * c.radius ** 2,
  rectangle: (r) => r.width * r.height,
};

const xmlExportVisitor = {
  circle: (c) => `<circle radius="${c.radius}" />`,
  rectangle: (r) => `<rectangle w="${r.width}" h="${r.height}" />`,
};

// --- demo ---
const shapes = [circle(10), rectangle(4, 5), circle(2)];

for (const shape of shapes) {
  console.log("area:", accept(shape, areaVisitor).toFixed(2));
  console.log("xml:", accept(shape, xmlExportVisitor));
}
