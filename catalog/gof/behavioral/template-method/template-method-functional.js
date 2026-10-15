/**
 * @pattern Template Method (Шаблонный метод)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Скелет алгоритма фиксирован; шаги подставляются снаружи.
 * В FP — higher-order функция, принимающая hooks/overrides.
 *
 * @when
 * - общий пайплайн, различаются отдельные шаги
 */

const createMiner = ({ extractData, parseData, sendReport }) => ({
  mine: (path) => {
    const raw = `raw-content-of:${path}`;
    const data = extractData(raw);
    const parsed = parseData(data);
    const report = `analysis(${parsed.length} items)`;
    sendReport(report);
    return report;
  },
});

const pdfMiner = createMiner({
  extractData: (raw) => `${raw}::pdf-bytes`,
  parseData: (data) => data.split("-").slice(0, 3),
  sendReport: (report) => console.log("Report:", report),
});

const csvMiner = createMiner({
  extractData: (raw) => `${raw}::csv-text`,
  parseData: (data) => data.split(":"),
  sendReport: (report) => console.log("CSV report emailed:", report),
});

// --- demo ---
pdfMiner.mine("doc.pdf");
csvMiner.mine("data.csv");
