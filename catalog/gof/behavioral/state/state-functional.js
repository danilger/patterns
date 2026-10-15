/**
 * @pattern State (Состояние)
 * @category Behavioral
 * @variant functional
 *
 * @description
 * Поведение меняется вместе с внутренним состоянием.
 * В FP — таблица переходов / map обработчиков по имени состояния.
 *
 * @when
 * - большой switch по состоянию; нужны явные переходы
 */

const createAudioPlayer = () => {
  let stateName = "ready";

  const transitions = {
    ready: {
      play: () => {
        console.log("Start playing");
        stateName = "playing";
      },
      pause: () => console.log("Nothing to pause"),
      stop: () => console.log("Already stopped"),
    },
    playing: {
      play: () => console.log("Already playing"),
      pause: () => {
        console.log("Paused");
        stateName = "paused";
      },
      stop: () => {
        console.log("Stopped");
        stateName = "ready";
      },
    },
    paused: {
      play: () => {
        console.log("Resume playing");
        stateName = "playing";
      },
      pause: () => console.log("Already paused"),
      stop: () => {
        console.log("Stopped");
        stateName = "ready";
      },
    },
  };

  return {
    play: () => transitions[stateName].play(),
    pause: () => transitions[stateName].pause(),
    stop: () => transitions[stateName].stop(),
    getState: () => stateName,
  };
};

// --- demo ---
const player = createAudioPlayer();
player.play();
player.pause();
player.play();
player.stop();
player.pause();
console.log("state:", player.getState());
