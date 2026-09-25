/**
 * @pattern Template Method (Шаблонный метод)
 * @category Behavioral
 *
 * @description
 * Задаёт скелет алгоритма в базовом классе. Подклассы переопределяют
 * отдельные шаги, не меняя общую структуру.
 *
 * @todo Реализация ниже
 */

class DataMiner {
  /** Template method — фиксированный порядок шагов */
  mine(path) {
    const raw = this.openFile(path);
    const data = this.extractData(raw);
    const parsed = this.parseData(data);
    const report = this.analyze(parsed);
    this.sendReport(report);
    return report;
  }

  openFile(path) {
    return `raw-content-of:${path}`;
  }

  extractData(raw) {
    throw new Error("extractData() must be implemented");
  }

  parseData(data) {
    throw new Error("parseData() must be implemented");
  }

  analyze(parsed) {
    return `analysis(${parsed.length} items)`;
  }

  /** Hook — можно переопределить */
  sendReport(report) {
    console.log("Report:", report);
  }
}

class PdfMiner extends DataMiner {
  extractData(raw) {
    return `${raw}::pdf-bytes`;
  }
  parseData(data) {
    return data.split("-").slice(0, 3);
  }
}

class CsvMiner extends DataMiner {
  extractData(raw) {
    return `${raw}::csv-text`;
  }
  parseData(data) {
    return data.split(":");
  }
  sendReport(report) {
    console.log("CSV report emailed:", report);
  }
}

// --- demo ---
const pdf = new PdfMiner();
const csv = new CsvMiner();

pdf.mine("doc.pdf");
csv.mine("data.csv");
