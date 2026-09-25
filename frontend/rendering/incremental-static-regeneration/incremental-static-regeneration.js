/**
 * @pattern Incremental Static Regeneration (ISR)
 * @area Frontend / Rendering
 * @sources Lydia Hallie — patterns.dev (ISR)
 *
 * @description
 * Пререндер части страниц + фоновая регенерация по TTL (stale-while-revalidate).
 * Пользователь может увидеть stale, следующий запрос — уже свежий HTML.
 *
 * @when много страниц (каталог), контент обновляется чаще деплоя, но не на каждый click
 */

function createIsrCache({ revalidateSeconds }) {
  const cache = new Map();

  return {
    async get(slug, render) {
      const entry = cache.get(slug);
      const now = Date.now();

      if (!entry) {
        const html = await render(slug);
        cache.set(slug, { html, ts: now });
        console.log("MISS → render", slug);
        return html;
      }

      const stale = now - entry.ts > revalidateSeconds * 1000;
      if (stale) {
        console.log("STALE → serve old, revalidate in background", slug);
        // background refresh
        Promise.resolve()
          .then(() => render(slug))
          .then((html) => cache.set(slug, { html, ts: Date.now() }));
      } else {
        console.log("HIT", slug);
      }
      return entry.html;
    },
  };
}

// --- demo ---
(async () => {
  let version = 1;
  const isr = createIsrCache({ revalidateSeconds: 0 }); // сразу stale для демо
  const render = async (slug) => `<h1>${slug} v${version++}</h1>`;

  console.log(await isr.get("/product/1", render));
  console.log(await isr.get("/product/1", render));
  await new Promise((r) => setTimeout(r, 20));
  console.log(await isr.get("/product/1", render));
})();
