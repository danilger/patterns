/**
 * @pattern Lazy Loading
 * @area Frontend / Performance
 * @sources patterns.dev; Addy Osmani (performance patterns)
 *
 * @description
 * Грузишь ресурс только когда он нужен (route, ниже fold, по клику).
 * Картинки: loading="lazy"; компоненты: lazy/import.
 *
 * @related Import on Interaction, Import on Visibility, Code Splitting
 */

function createLazyImage(src) {
  let loaded = false;
  return {
    enterViewport() {
      if (loaded) return "already loaded";
      loaded = true;
      return `fetch ${src}`;
    },
  };
}

// --- demo ---
const img = createLazyImage("/hero.webp");
console.log("init: not loaded");
console.log(img.enterViewport());
console.log(img.enterViewport());
