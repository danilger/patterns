/**
 * @pattern Abstract Factory (Абстрактная фабрика)
 * @category Creational
 * @variant functional
 *
 * @description
 * Предоставляет интерфейс для создания семейств связанных объектов
 * без указания их конкретных классов. В FP — фабрики как объекты функций.
 *
 * @when
 * - нужно создать согласованное семейство продуктов (тема UI, платформа)
 * - клиент не должен знать конкретные типы
 */

const winButton = () => ({ paint: () => "Render a button in Windows style" });
const macButton = () => ({ paint: () => "Render a button in macOS style" });
const winCheckbox = () => ({ paint: () => "Render a checkbox in Windows style" });
const macCheckbox = () => ({ paint: () => "Render a checkbox in macOS style" });

const winFactory = {
  createButton: winButton,
  createCheckbox: winCheckbox,
};

const macFactory = {
  createButton: macButton,
  createCheckbox: macCheckbox,
};

const createApplication = (factory) => {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  return {
    paint: () => [button.paint(), checkbox.paint()],
  };
};

// --- demo ---
const os = "mac"; // попробуй "win"
const factory = os === "win" ? winFactory : macFactory;
const app = createApplication(factory);

console.log(app.paint());
