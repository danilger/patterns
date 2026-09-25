/**
 * @pattern Composite (Компоновщик)
 * @category Structural
 *
 * @description
 * Компонует объекты в дерево «часть–целое». Клиент единообразно работает
 * с листьями и составными узлами через общий интерфейс Component.
 *
 * @todo Реализация ниже
 */

class FileSystemItem {
  constructor(name) {
    this.name = name;
  }

  getSize() {
    throw new Error("getSize() must be implemented");
  }

  print(indent = "") {
    throw new Error("print() must be implemented");
  }
}

/** Leaf */
class File extends FileSystemItem {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  getSize() {
    return this.size;
  }

  print(indent = "") {
    console.log(`${indent}- ${this.name} (${this.size}KB)`);
  }
}

/** Composite */
class Folder extends FileSystemItem {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(item) {
    this.children.push(item);
  }

  remove(item) {
    this.children = this.children.filter((child) => child !== item);
  }

  getSize() {
    return this.children.reduce((sum, child) => sum + child.getSize(), 0);
  }

  print(indent = "") {
    console.log(`${indent}+ ${this.name}/ (${this.getSize()}KB)`);
    for (const child of this.children) {
      child.print(indent + "  ");
    }
  }
}

// --- demo ---
const root = new Folder("project");
const src = new Folder("src");
src.add(new File("index.js", 12));
src.add(new File("app.js", 30));
root.add(src);
root.add(new File("README.md", 5));

root.print();
console.log("Total:", root.getSize(), "KB");
