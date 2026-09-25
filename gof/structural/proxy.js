/**
 * @pattern Proxy (Заместитель)
 * @category Structural
 *
 * @description
 * Подставляет объект-заместитель вместо реального для контроля доступа,
 * ленивой загрузки, кеша и т.п. Тот же интерфейс, что у RealSubject.
 *
 * @todo Реализация ниже
 */

class Image {
  display() {
    throw new Error("display() must be implemented");
  }
}

class RealImage extends Image {
  constructor(filename) {
    super();
    this.filename = filename;
    this.loadFromDisk();
  }

  loadFromDisk() {
    console.log(`Loading ${this.filename} from disk...`);
  }

  display() {
    return `Displaying ${this.filename}`;
  }
}

/** Virtual Proxy — создаёт RealImage только при первом display() */
class ImageProxy extends Image {
  constructor(filename) {
    super();
    this.filename = filename;
    this.realImage = null;
  }

  display() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.filename);
    }
    return this.realImage.display();
  }
}

// --- demo ---
const image = new ImageProxy("photo.png");
console.log("Proxy created (file not loaded yet)");
console.log(image.display()); // load + display
console.log(image.display()); // только display, без повторной загрузки
