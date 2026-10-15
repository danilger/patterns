/**
 * @pattern Adapter (Адаптер)
 * @category Structural
 * @variant functional
 *
 * @description
 * Преобразует несовместимый API в ожидаемый контракт.
 * В FP — функция-обёртка, которая переводит вызовы.
 *
 * @when
 * - чужой API нельзя менять, а клиент ждёт свой интерфейс
 */

const createMp3Player = () => ({
  play: (filename) => `Playing mp3 file: ${filename}`,
});

/** Adaptee — чужой API */
const createLegacyAudioApi = () => ({
  startPlayback: (path, volume) => `Legacy play "${path}" at volume ${volume}`,
});

/** Adapter — делает Legacy совместимым с { play } */
const adaptLegacyAudio = (legacyApi, defaultVolume = 50) => ({
  play: (filename) => legacyApi.startPlayback(filename, defaultVolume),
});

const playTrack = (player, filename) => {
  console.log(player.play(filename));
};

// --- demo ---
const mp3 = createMp3Player();
const adapted = adaptLegacyAudio(createLegacyAudioApi(), 80);

playTrack(mp3, "song.mp3");
playTrack(adapted, "archive.wav");
