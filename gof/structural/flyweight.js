/**
 * @pattern Flyweight (Приспособленец)
 * @category Structural
 *
 * @description
 * Разделяет общее (intrinsic) состояние между многими объектами.
 * Уникальное (extrinsic) передаётся снаружи при вызове.
 *
 * @todo Реализация ниже
 */

/** Flyweight — intrinsic: type + texture (тяжёлые данные) */
class TreeType {
  constructor(name, color, texture) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  draw(canvas, x, y) {
    // x, y — extrinsic state
    canvas.push(`Draw ${this.name}/${this.color} at (${x},${y}) [${this.texture}]`);
  }
}

class TreeFactory {
  static types = new Map();

  static getTreeType(name, color, texture) {
    const key = `${name}_${color}_${texture}`;
    if (!TreeFactory.types.has(key)) {
      TreeFactory.types.set(key, new TreeType(name, color, texture));
      console.log(`Created TreeType: ${key}`);
    }
    return TreeFactory.types.get(key);
  }
}

/** Контекст: хранит extrinsic + ссылку на flyweight */
class Tree {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(canvas) {
    this.type.draw(canvas, this.x, this.y);
  }
}

class Forest {
  constructor() {
    this.trees = [];
  }

  plantTree(x, y, name, color, texture) {
    const type = TreeFactory.getTreeType(name, color, texture);
    this.trees.push(new Tree(x, y, type));
  }

  draw() {
    const canvas = [];
    for (const tree of this.trees) {
      tree.draw(canvas);
    }
    return canvas;
  }
}

// --- demo ---
const forest = new Forest();
forest.plantTree(1, 1, "Oak", "green", "oak-tex");
forest.plantTree(2, 3, "Oak", "green", "oak-tex"); // тот же TreeType
forest.plantTree(5, 8, "Pine", "dark-green", "pine-tex");

console.log("Unique types:", TreeFactory.types.size); // 2
console.log(forest.draw());
