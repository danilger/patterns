/**
 * @pattern State (Состояние)
 * @category Behavioral
 *
 * @description
 * Позволяет объекту менять поведение при смене внутреннего состояния.
 * Вместо больших if/switch — отдельные классы состояний.
 *
 * @todo Реализация ниже
 */

class State {
  constructor(player) {
    this.player = player;
  }
  play() {
    throw new Error("play() must be implemented");
  }
  pause() {
    throw new Error("pause() must be implemented");
  }
  stop() {
    throw new Error("stop() must be implemented");
  }
}

class ReadyState extends State {
  play() {
    console.log("Start playing");
    this.player.setState(new PlayingState(this.player));
  }
  pause() {
    console.log("Nothing to pause");
  }
  stop() {
    console.log("Already stopped");
  }
}

class PlayingState extends State {
  play() {
    console.log("Already playing");
  }
  pause() {
    console.log("Paused");
    this.player.setState(new PausedState(this.player));
  }
  stop() {
    console.log("Stopped");
    this.player.setState(new ReadyState(this.player));
  }
}

class PausedState extends State {
  play() {
    console.log("Resume playing");
    this.player.setState(new PlayingState(this.player));
  }
  pause() {
    console.log("Already paused");
  }
  stop() {
    console.log("Stopped");
    this.player.setState(new ReadyState(this.player));
  }
}

/** Context */
class AudioPlayer {
  constructor() {
    this.state = new ReadyState(this);
  }

  setState(state) {
    this.state = state;
  }

  play() {
    this.state.play();
  }
  pause() {
    this.state.pause();
  }
  stop() {
    this.state.stop();
  }
}

// --- demo ---
const player = new AudioPlayer();
player.play();
player.pause();
player.play();
player.stop();
player.pause();
