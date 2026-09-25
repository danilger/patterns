/**
 * @pattern List Virtualization (Windowing)
 * @area Frontend / Performance
 * @sources Addy Osmani Ch.12 — List Virtualization
 *
 * @description
 * Рендеришь только видимое окно списка (+ overscan), а не все 10k DOM-узлов.
 * Библиотеки: react-window, tanstack-virtual.
 *
 * @when длинные таблицы, чаты, бесконечные ленты
 */

function virtualSlice({ length, scrollTop, rowHeight, viewportHeight, overscan = 2 }) {
  const start = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const visible = Math.ceil(viewportHeight / rowHeight) + overscan * 2;
  const end = Math.min(length, start + visible);
  const items = [];
  for (let i = start; i < end; i++) items.push(i);
  return { start, end, items, totalHeight: length * rowHeight };
}

// --- demo ---
const windowed = virtualSlice({
  length: 10000,
  scrollTop: 1500,
  rowHeight: 30,
  viewportHeight: 300,
});
console.log(windowed);
console.log("DOM nodes:", windowed.items.length, "of", 10000);
