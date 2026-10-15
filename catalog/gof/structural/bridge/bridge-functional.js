/**
 * @pattern Bridge (Мост)
 * @category Structural
 * @variant functional
 *
 * @description
 * Отделяет абстракцию от реализации. В FP — пульт как функции
 * над устройством (замыкание / объект методов), устройства независимы.
 *
 * @when
 * - абстракция и реализация должны эволюционировать отдельно
 * - иначе — комбинаторный взрыв подклассов
 */

const createTv = () => {
  let on = false;
  let volume = 30;
  return {
    isEnabled: () => on,
    enable: () => {
      on = true;
    },
    disable: () => {
      on = false;
    },
    getVolume: () => volume,
    setVolume: (percent) => {
      volume = Math.max(0, Math.min(100, percent));
    },
  };
};

const createRadio = () => {
  let on = false;
  let volume = 20;
  return {
    isEnabled: () => on,
    enable: () => {
      on = true;
    },
    disable: () => {
      on = false;
    },
    getVolume: () => volume,
    setVolume: (percent) => {
      volume = Math.max(0, Math.min(100, percent));
    },
  };
};

const createRemote = (device) => ({
  togglePower: () => {
    if (device.isEnabled()) device.disable();
    else device.enable();
  },
  volumeUp: () => device.setVolume(device.getVolume() + 10),
  volumeDown: () => device.setVolume(device.getVolume() - 10),
});

const createAdvancedRemote = (device) => ({
  ...createRemote(device),
  mute: () => device.setVolume(0),
});

// --- demo ---
const tv = createTv();
const radio = createRadio();
const tvRemote = createRemote(tv);
const radioRemote = createAdvancedRemote(radio);

tvRemote.togglePower();
tvRemote.volumeUp();
console.log(`TV on=${tv.isEnabled()} volume=${tv.getVolume()}`);

radioRemote.togglePower();
radioRemote.mute();
console.log(`Radio on=${radio.isEnabled()} volume=${radio.getVolume()}`);
