/**
 * @pattern Client-Side Rendering (CSR)
 * @area Frontend / Rendering
 * @sources Lydia Hallie & Addy Osmani — patterns.dev / Tour of JS & React Patterns
 *
 * @description
 * Сервер отдаёт тонкий HTML + JS-бандл. UI строится в браузере.
 * Быстрый TTFB для shell, но контент и SEO зависят от JS.
 *
 * @when SPA-дашборды, apps за логином, мало требований к SEO
 * @tradeoffs медленный FCP/LCP на слабых сетях; пустой HTML до гидрации/рендера
 */

function csrApp({ fetchData, render }) {
  console.log("1. browser downloads JS bundle");
  console.log("2. JS executes, app mounts");
  return fetchData().then((data) => {
    console.log("3. data fetched on client");
    return render(data);
  });
}

// --- demo ---
csrApp({
  fetchData: () => Promise.resolve([{ id: 1, title: "Post" }]),
  render: (data) => `HTML built on client: ${data[0].title}`,
}).then(console.log);
