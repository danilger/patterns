/**
 * @pattern Observer (Наблюдатель)
 * @category Behavioral
 *
 * @description
 * Зависимость «один ко многим»: при изменении Subject все Observer
 * получают уведомление и обновляются.
 *
 * @todo Реализация ниже
 */

class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notify() {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class WeatherStation extends Subject {
  constructor() {
    super();
    this.temperature = 0;
  }

  setTemperature(temp) {
    this.temperature = temp;
    this.notify();
  }

  getTemperature() {
    return this.temperature;
  }
}

class Observer {
  update(subject) {
    throw new Error("update() must be implemented");
  }
}

class PhoneDisplay extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  update(subject) {
    console.log(`${this.name}: temperature is ${subject.getTemperature()}°C`);
  }
}

// --- demo ---
const station = new WeatherStation();
const phone = new PhoneDisplay("Phone");
const tablet = new PhoneDisplay("Tablet");

station.attach(phone);
station.attach(tablet);

station.setTemperature(22);
station.setTemperature(25);

station.detach(tablet);
station.setTemperature(18);
