/**
 * @pattern Flyweight (Приспособленец)
 * @category Structural
 * @variant functional
 *
 * @description
 * Разделяет intrinsic-состояние между многими объектами.
 * В FP — фабрика с Map-кешем + контексты с extrinsic-данными.
 *
 * @when
 * - много похожих объектов, общее состояние можно шарить
 */

const createTreeTypeFactory = () => {
  const types = new Map();

  const getTreeType = (name, color, texture) => {
    const key = `${name}_${color}_${texture}`;
    if (!types.has(key)) {
      types.set(key, { name, color, texture });
      console.log(`Created TreeType: ${key}`);
    }
    return types.get(key);
  };

  return { getTreeType, size: () => types.size };
};

const drawTree = (canvas, tree) => {
  const { type, x, y } = tree;
  canvas.push(`Draw ${type.name}/${type.color} at (${x},${y}) [${type.texture}]`);
};

const createForest = (typeFactory) => {
  const trees = [];

  return {
    plantTree: (x, y, name, color, texture) => {
      const type = typeFactory.getTreeType(name, color, texture);
      trees.push({ x, y, type });
    },
    draw: () => {
      const canvas = [];
      for (const tree of trees) drawTree(canvas, tree);
      return canvas;
    },
  };
};

// --- demo ---
const typeFactory = createTreeTypeFactory();
const forest = createForest(typeFactory);

forest.plantTree(1, 1, "Oak", "green", "oak-tex");
forest.plantTree(2, 3, "Oak", "green", "oak-tex"); // тот же TreeType
forest.plantTree(5, 8, "Pine", "dark-green", "pine-tex");

console.log("Unique types:", typeFactory.size()); // 2
console.log(forest.draw());
