/**
 * @pattern Import on Visibility
 * @area Frontend / Performance
 * @sources patterns.dev — Import on Visibility (Hallie / Osmani)
 *
 * @description
 * Чанк/виджет грузится, когда элемент входит в viewport (IntersectionObserver).
 *
 * @when below-the-fold блоки, карусели, тяжёлые секции лендинга
 */

function createImportOnVisibility(loader) {
  let started = false;
  return {
    async onVisible() {
      if (started) return "already loading/loaded";
      started = true;
      console.log("visible → load chunk");
      const mod = await loader();
      return mod.mount();
    },
  };
}

// --- demo ---
const comments = createImportOnVisibility(async () => ({
  mount: () => "Comments widget mounted",
}));
comments.onVisible().then(console.log);
