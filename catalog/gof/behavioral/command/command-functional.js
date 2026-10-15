/**
 * @pattern Command (Команда)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Инкапсулирует запрос как объект с execute/undo.
 * В FP — пары функций { execute, undo }, очередь в invoker.
 *
 * @when
 * - нужны очередь, лог, undo/redo операций
 */

const createLight = () => {
  let on = false;
  return {
    turnOn: () => {
      on = true;
    },
    turnOff: () => {
      on = false;
    },
    isOn: () => on,
  };
};

const lightOnCommand = (light) => ({
  execute: () => light.turnOn(),
  undo: () => light.turnOff(),
});

const lightOffCommand = (light) => ({
  execute: () => light.turnOff(),
  undo: () => light.turnOn(),
});

const createRemote = () => {
  const history = [];

  return {
    press: (command) => {
      command.execute();
      history.push(command);
    },
    undo: () => {
      const command = history.pop();
      if (command) command.undo();
    },
  };
};

// --- demo ---
const light = createLight();
const remote = createRemote();

remote.press(lightOnCommand(light));
console.log("on:", light.isOn());
remote.press(lightOffCommand(light));
console.log("on:", light.isOn());
remote.undo();
console.log("on after undo:", light.isOn());
