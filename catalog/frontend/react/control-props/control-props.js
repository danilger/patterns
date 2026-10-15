/**
 * @pattern Control Props
 * @area Frontend / React
 * @sources Kent C. Dodds — Control Props; related to Controlled components
 *
 * @description
 * Состояние может быть внутренним (defaultValue) или полностью контролироваться
 * снаружи через `value` + `onChange`. Один компонент поддерживает оба режима
 * («control props» как API библиотечного виджета).
 *
 * @when
 * - дизайн-системный виджет (Toggle, Tabs, Select)
 * - родитель иногда синхронизирует state, иногда отдаёт виджету автономию
 */

function createSwitch({ value: valueProp, defaultValue = false, onChange } = {}) {
  let internal = defaultValue;
  let value = valueProp;
  const isControlled = () => value !== undefined;

  function read() {
    return isControlled() ? value : internal;
  }

  function write(next) {
    if (!isControlled()) internal = next;
    else value = next;
    onChange?.(next);
  }

  return {
    get on() {
      return read();
    },
    toggle() {
      write(!read());
    },
  };
}

// --- demo ---
const uncontrolled = createSwitch({ defaultValue: false });
uncontrolled.toggle();
console.log("uncontrolled:", uncontrolled.on);

let parent = false;
const controlled = createSwitch({
  value: parent,
  onChange(next) {
    parent = next;
    console.log("parent sync:", parent);
  },
});
controlled.toggle();
console.log("controlled read after toggle:", controlled.on, "parent:", parent);
