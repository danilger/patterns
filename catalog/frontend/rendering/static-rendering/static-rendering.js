/**
 * @pattern Static Rendering (SSG)
 * @area Frontend / Rendering
 * @sources Lydia Hallie — patterns.dev (Static Rendering)
 *
 * @description
 * HTML генерируется на билде и раздаётся с CDN. Отличный SEO и TTFB.
 * Контент обновляется новым деплоем (или через ISR).
 *
 * @when маркетинг, блоги, docs, редко меняющиеся страницы
 */

function staticBuild(pages) {
  console.log("build time: pre-render HTML for each page");
  return Object.fromEntries(
    pages.map((p) => [p.slug, `<html><h1>${p.title}</h1></html>`])
  );
}

function serveFromCdn(cache, slug) {
  return cache[slug] ?? "404";
}

// --- demo ---
const cache = staticBuild([
  { slug: "/", title: "Home" },
  { slug: "/about", title: "About" },
]);
console.log(serveFromCdn(cache, "/about"));
