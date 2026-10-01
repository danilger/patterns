/**
 * @pattern Observer (Наблюдатель)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Зависимость «один ко многим»: Subject уведомляет подписчиков.
 * В FP — pub/sub через замыкание и массив listener-функций.
 *
 * @when
 * - изменение одного объекта должно обновить многих слушателей
 */

const createWeatherStation = () => {
  const observers = new Set();
  let temperature = 0;

  return {
    attach: (observer) => observers.add(observer),
    detach: (observer) => observers.delete(observer),
    setTemperature: (temp) => {
      temperature = temp;
      for (const observer of observers) observer(temperature);
    },
    getTemperature: () => temperature,
  };
};

const createPhoneDisplay = (name) => (temperature) => {
  console.log(`${name}: temperature is ${temperature}°C`);
};

// --- demo ---
const station = createWeatherStation();
const phone = createPhoneDisplay("Phone");
const tablet = createPhoneDisplay("Tablet");

station.attach(phone);
station.attach(tablet);

station.setTemperature(22);
station.setTemperature(25);

station.detach(tablet);
station.setTemperature(18);
