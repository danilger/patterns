/**
 * @pattern Islands Architecture
 * @area Frontend / Rendering
 * @sources Addy Osmani — Learning JavaScript Design Patterns (Islands);
 *          patterns.dev rendering patterns
 *
 * @description
 * Большая часть страницы — статичный HTML. «Острова» интерактивности
 * гидрируются точечно (виджеты), а не всё приложение целиком.
 *
 * @when контентные сайты с редкими интерактивными блоками (Astro и т.п.)
 */

function renderPage({ staticHtml, islands }) {
  console.log("static HTML shipped with zero JS for static parts");
  const hydrated = islands.map((island) => {
    console.log(`hydrate island "${island.name}" only`);
    return island.mount();
  });
  return { staticHtml, hydrated };
}

// --- demo ---
const page = renderPage({
  staticHtml: "<article>Long blog post...</article>",
  islands: [
    { name: "SearchBox", mount: () => "SearchBox interactive" },
    { name: "LikeButton", mount: () => "LikeButton interactive" },
  ],
});
console.log(page);
