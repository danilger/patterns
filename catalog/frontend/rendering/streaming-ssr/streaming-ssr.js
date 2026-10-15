/**
 * @pattern Streaming SSR
 * @area Frontend / Rendering
 * @sources Lydia Hallie — patterns.dev (Streaming Server-Side Rendering)
 *
 * @description
 * Сервер стримит HTML кусками по мере готовности (React `renderToPipeableStream`,
 * Suspense boundaries), не дожидаясь всего дерева.
 *
 * @when большие страницы; часть данных медленная — shell сразу, rest потом
 */

async function* streamSSR(sections) {
  yield "<!doctype html><html><body>";
  for (const section of sections) {
    await section.delay;
    yield section.html;
  }
  yield "</body></html>";
}

// --- demo ---
(async () => {
  const sections = [
    { delay: 10, html: "<header>Shell</header>" },
    { delay: 30, html: "<main>Slow widget</main>" },
    { delay: 5, html: "<footer>Done</footer>" },
  ];
  for await (const chunk of streamSSR(sections)) {
    console.log("chunk:", chunk);
  }
})();
