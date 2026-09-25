/**
 * @pattern Abstract Factory (Абстрактная фабрика)
 * @category Creational
 *
 * @description
 * Предоставляет интерфейс для создания семейств связанных объектов
 * без указания их конкретных классов.
 *
 * @todo Реализация ниже
 */

// --- products ---
class WinButton {
  paint() {
    return "Render a button in Windows style";
  }
}

class MacButton {
  paint() {
    return "Render a button in macOS style";
  }
}

class WinCheckbox {
  paint() {
    return "Render a checkbox in Windows style";
  }
}

class MacCheckbox {
  paint() {
    return "Render a checkbox in macOS style";
  }
}

// --- abstract factory (контракт) + concrete factories ---
class GUIFactory {
  createButton() {
    throw new Error("createButton() must be implemented");
  }
  createCheckbox() {
    throw new Error("createCheckbox() must be implemented");
  }
}

class WinFactory extends GUIFactory {
  createButton() {
    return new WinButton();
  }
  createCheckbox() {
    return new WinCheckbox();
  }
}

class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox() {
    return new MacCheckbox();
  }
}

// --- client ---
class Application {
  constructor(factory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  paint() {
    return [this.button.paint(), this.checkbox.paint()];
  }
}

// --- demo ---
const os = "mac"; // попробуй "win"
const factory = os === "win" ? new WinFactory() : new MacFactory();
const app = new Application(factory);

console.log(app.paint());
