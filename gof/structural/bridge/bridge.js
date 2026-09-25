/**
 * @pattern Bridge (Мост)
 * @category Structural
 *
 * @description
 * Отделяет абстракцию от реализации, чтобы обе менялись независимо.
 * Abstraction держит Implementor и делегирует ему низкоуровневую работу.
 *
 * @todo Реализация ниже
 */

/** Implementor — низкоуровневый контракт устройства */
class Device {
  isEnabled() {
    throw new Error("isEnabled() must be implemented");
  }
  enable() {
    throw new Error("enable() must be implemented");
  }
  disable() {
    throw new Error("disable() must be implemented");
  }
  getVolume() {
    throw new Error("getVolume() must be implemented");
  }
  setVolume(percent) {
    throw new Error("setVolume() must be implemented");
  }
}

class Tv extends Device {
  constructor() {
    super();
    this.on = false;
    this.volume = 30;
  }
  isEnabled() {
    return this.on;
  }
  enable() {
    this.on = true;
  }
  disable() {
    this.on = false;
  }
  getVolume() {
    return this.volume;
  }
  setVolume(percent) {
    this.volume = Math.max(0, Math.min(100, percent));
  }
}

class Radio extends Device {
  constructor() {
    super();
    this.on = false;
    this.volume = 20;
  }
  isEnabled() {
    return this.on;
  }
  enable() {
    this.on = true;
  }
  disable() {
    this.on = false;
  }
  getVolume() {
    return this.volume;
  }
  setVolume(percent) {
    this.volume = Math.max(0, Math.min(100, percent));
  }
}

/** Abstraction — пульт; мост к Device */
class Remote {
  constructor(device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10);
  }
}

/** RefinedAbstraction */
class AdvancedRemote extends Remote {
  mute() {
    this.device.setVolume(0);
  }
}

// --- demo ---
const tv = new Tv();
const radio = new Radio();

const tvRemote = new Remote(tv);
const radioRemote = new AdvancedRemote(radio);

tvRemote.togglePower();
tvRemote.volumeUp();
console.log(`TV on=${tv.isEnabled()} volume=${tv.getVolume()}`);

radioRemote.togglePower();
radioRemote.mute();
console.log(`Radio on=${radio.isEnabled()} volume=${radio.getVolume()}`);
