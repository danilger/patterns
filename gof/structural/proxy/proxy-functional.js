/**
 * @pattern Proxy (Заместитель)
 * @category Structural
 * @variant functional
 *
 * @description
 * Подставляет заместитель вместо реального объекта (lazy, access, cache).
 * В FP — замыкание с ленивой инициализацией за тем же интерфейсом.
 *
 * @when
 * - дорогой объект не должен создаваться до первого использования
 */

const createRealImage = (filename) => {
  console.log(`Loading ${filename} from disk...`);
  return {
    display: () => `Displaying ${filename}`,
  };
};

/** Virtual Proxy */
const createImageProxy = (filename) => {
  let realImage = null;

  return {
    display: () => {
      if (!realImage) {
        realImage = createRealImage(filename);
      }
      return realImage.display();
    },
  };
};

// --- demo ---
const image = createImageProxy("photo.png");
console.log("Proxy created (file not loaded yet)");
console.log(image.display()); // load + display
console.log(image.display()); // только display
