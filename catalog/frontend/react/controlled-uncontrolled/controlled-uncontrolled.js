/**
 * @pattern Controlled / Uncontrolled Components
 * @area Frontend / React
 * @sources React docs; Addy Osmani Ch.12 (forms-related patterns)
 *
 * @description
 * Controlled: значение поля живёт в React state, onChange обновляет state.
 * Uncontrolled: значение в DOM, читаешь через ref (defaultValue).
 *
 * @when
 * - Controlled — валидация на каждый ввод, синхронизация UI
 * - Uncontrolled — простые формы, интеграция с non-React, меньше ререндеров
 */

function createControlledInput(initial = "") {
  let value = initial;
  return {
    get value() {
      return value;
    },
    onChange(next) {
      value = next;
    },
  };
}

function createUncontrolledInput(initial = "") {
  const dom = { value: initial }; // «DOM node»
  return {
    defaultValue: initial,
    ref: dom,
    read() {
      return dom.value;
    },
    type(next) {
      dom.value = next; // пользователь печатает в DOM
    },
  };
}

// --- demo ---
const controlled = createControlledInput("");
controlled.onChange("hello");
console.log("controlled:", controlled.value);

const uncontrolled = createUncontrolledInput("seed");
uncontrolled.type("world");
console.log("uncontrolled read:", uncontrolled.read());
