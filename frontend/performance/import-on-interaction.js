/**
 * @pattern Import on Interaction
 * @area Frontend / Performance
 * @sources Lydia Hallie & Addy Osmani — patterns.dev performance patterns
 *
 * @description
 * Чанк грузится по действию пользователя (клик, focus), а не upfront.
 * Пример: тяжёлый WYSIWYG / chart только после "Edit".
 */

function createImportOnInteraction(loader) {
  let modPromise = null;
  return {
    async onInteraction() {
      if (!modPromise) {
        console.log("interaction → start loading chunk");
        modPromise = loader();
      }
      const mod = await modPromise;
      return mod.open();
    },
  };
}

// --- demo ---
const editor = createImportOnInteraction(async () => {
  await new Promise((r) => setTimeout(r, 15));
  return { open: () => "Editor ready" };
});

editor.onInteraction().then(console.log);
