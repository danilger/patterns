/**
 * @pattern Composite (Компоновщик)
 * @category Structural
 * @variant functional
 *
 * @description
 * Дерево «часть–целое»: лист и узел обрабатываются одинаково.
 * В FP — tagged plain objects + рекурсивные функции.
 *
 * @when
 * - иерархия с одинаковой операцией над листьями и группами
 */

const file = (name, size) => ({ kind: "file", name, size });
const folder = (name, children = []) => ({ kind: "folder", name, children });

const getSize = (item) =>
  item.kind === "file"
    ? item.size
    : item.children.reduce((sum, child) => sum + getSize(child), 0);

const print = (item, indent = "") => {
  if (item.kind === "file") {
    console.log(`${indent}- ${item.name} (${item.size}KB)`);
    return;
  }
  console.log(`${indent}+ ${item.name}/ (${getSize(item)}KB)`);
  for (const child of item.children) {
    print(child, indent + "  ");
  }
};

// --- demo ---
const root = folder("project", [
  folder("src", [file("index.js", 12), file("app.js", 30)]),
  file("README.md", 5),
]);

print(root);
console.log("Total:", getSize(root), "KB");
