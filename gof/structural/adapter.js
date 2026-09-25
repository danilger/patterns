/**
 * @pattern Adapter (Адаптер)
 * @category Structural
 *
 * @description
 * Преобразует интерфейс одного класса в интерфейс, который ожидают клиенты.
 * Позволяет классам с несовместимыми интерфейсами работать вместе.
 *
 * Object Adapter: композиция — Adapter держит Adaptee и переводит вызовы.
 *
 * @todo Реализация ниже
 */

/** Target — контракт, который ожидает клиент */
class MediaPlayer {
  play(filename) {
    throw new Error("play() must be implemented");
  }
}

/** «Родная» реализация Target */
class Mp3Player extends MediaPlayer {
  play(filename) {
    return `Playing mp3 file: ${filename}`;
  }
}

/** Adaptee — чужой API, который нельзя/не хотим менять */
class LegacyAudioApi {
  startPlayback(path, volume) {
    return `Legacy play "${path}" at volume ${volume}`;
  }
}

/** Adapter — делает LegacyAudioApi совместимым с MediaPlayer */
class AudioAdapter extends MediaPlayer {
  constructor(legacyApi, defaultVolume = 50) {
    super();
    this.legacyApi = legacyApi;
    this.defaultVolume = defaultVolume;
  }

  play(filename) {
    return this.legacyApi.startPlayback(filename, this.defaultVolume);
  }
}

/** Client работает только с MediaPlayer */
function playTrack(player, filename) {
  console.log(player.play(filename));
}

// --- demo ---
const mp3 = new Mp3Player();
const legacy = new LegacyAudioApi();
const adapted = new AudioAdapter(legacy, 80);

playTrack(mp3, "song.mp3");
playTrack(adapted, "archive.wav");
