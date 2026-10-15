/**
 * @pattern Facade (Фасад)
 * @category Structural
 * @variant functional
 *
 * @description
 * Простой интерфейс к сложной подсистеме. В FP — модуль-функция,
 * которая оркестрирует чистые шаги подсистемы.
 *
 * @when
 * - клиенту нужен один вызов вместо десятка внутренних API
 */

const decodeAudio = (file) => `decoded-audio(${file})`;
const decodeVideo = (file) => `decoded-video(${file})`;
const loadSubtitles = (file) => `subtitles(${file})`;
const renderScreen = (videoFrame, subtitle) => `RENDER ${videoFrame} + ${subtitle}`;
const playSpeakers = (audioFrame) => `PLAY ${audioFrame}`;

/** Facade */
const playMovie = (movieFile, subtitleFile) => {
  const audioFrame = decodeAudio(movieFile);
  const videoFrame = decodeVideo(movieFile);
  const subtitle = loadSubtitles(subtitleFile);

  return [playSpeakers(audioFrame), renderScreen(videoFrame, subtitle)];
};

// --- demo ---
console.log(playMovie("matrix.mp4", "matrix.srt"));
