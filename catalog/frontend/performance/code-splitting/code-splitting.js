/**
 * @pattern Code Splitting / Dynamic Import
 * @area Frontend / Performance
 * @sources Addy Osmani Ch.12; Lydia Hallie — performance patterns; patterns.dev
 *
 * @description
 * Делишь бандл на чанки: начальный route грузит меньше JS.
 * В React: `React.lazy` + `Suspense`, `import()`.
 *
 * В самом JS это уже язык: dynamic `import()` — Module pattern «из коробки».
 *
 * @when большие apps, редкие routes/модалки/админка
 */

async function loadAdminPanel() {
  // имитация dynamic import('./admin-panel.js')
  return {
    render: () => "AdminPanel chunk loaded",
  };
}

async function route(path) {
  if (path === "/admin") {
    console.log("lazy-load admin chunk...");
    const mod = await loadAdminPanel();
    return mod.render();
  }
  return "Home (in main bundle)";
}

// --- demo ---
route("/").then(console.log);
route("/admin").then(console.log);
