/**
 * @pattern Command (Команда)
 * @category Behavioral
 *
 * @description
 * Инкапсулирует запрос как объект. Позволяет ставить в очередь,
 * логировать и отменять операции (undo).
 *
 * @todo Реализация ниже
 */

class Light {
  constructor() {
    this.on = false;
  }
  turnOn() {
    this.on = true;
  }
  turnOff() {
    this.on = false;
  }
}

class Command {
  execute() {
    throw new Error("execute() must be implemented");
  }
  undo() {
    throw new Error("undo() must be implemented");
  }
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  execute() {
    this.light.turnOn();
  }
  undo() {
    this.light.turnOff();
  }
}

class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  execute() {
    this.light.turnOff();
  }
  undo() {
    this.light.turnOn();
  }
}

/** Invoker */
class RemoteControl {
  constructor() {
    this.history = [];
  }

  press(command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command) command.undo();
  }
}

// --- demo ---
const light = new Light();
const remote = new RemoteControl();
const on = new LightOnCommand(light);
const off = new LightOffCommand(light);

remote.press(on);
console.log("on:", light.on);
remote.press(off);
console.log("on:", light.on);
remote.undo();
console.log("on after undo:", light.on);
