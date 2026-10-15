/**
 * @pattern Server-Side Rendering (SSR)
 * @area Frontend / Rendering
 * @sources Lydia Hallie & Addy Osmani — patterns.dev (SSR)
 *
 * @description
 * HTML собирается на сервере на каждый request, затем гидрируется на клиенте.
 * Хорошо для персонализации и SEO; дороже по CPU сервера.
 *
 * @when страницы с request-данными (cookies, geo), нужны быстрый FCP + SEO
 */

async function ssrRequest({ req, loadData, renderToString }) {
  console.log("request", req.url);
  const data = await loadData(req);
  const html = renderToString(data);
  console.log("send HTML, client will hydrate later");
  return html;
}

// --- demo ---
ssrRequest({
  req: { url: "/profile", userId: 7 },
  loadData: async (req) => ({ name: `User#${req.userId}` }),
  renderToString: (data) => `<html><h1>Hello ${data.name}</h1></html>`,
}).then(console.log);
