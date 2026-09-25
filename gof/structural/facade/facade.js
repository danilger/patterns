/**
 * @pattern Facade (Фасад)
 * @category Structural
 *
 * @description
 * Даёт простой интерфейс к сложной подсистеме. Оркестрирует вызовы,
 * скрывая детали от клиента.
 *
 * @todo Реализация ниже
 */

class AudioDecoder {
  decode(file) {
    return `decoded-audio(${file})`;
  }
}

class VideoDecoder {
  decode(file) {
    return `decoded-video(${file})`;
  }
}

class SubtitleLoader {
  load(file) {
    return `subtitles(${file})`;
  }
}

class Screen {
  render(videoFrame, subtitle) {
    return `RENDER ${videoFrame} + ${subtitle}`;
  }
}

class Speakers {
  play(audioFrame) {
    return `PLAY ${audioFrame}`;
  }
}

/** Facade */
class VideoPlayerFacade {
  constructor() {
    this.audio = new AudioDecoder();
    this.video = new VideoDecoder();
    this.subs = new SubtitleLoader();
    this.screen = new Screen();
    this.speakers = new Speakers();
  }

  play(movieFile, subtitleFile) {
    const audioFrame = this.audio.decode(movieFile);
    const videoFrame = this.video.decode(movieFile);
    const subtitle = this.subs.load(subtitleFile);

    return [
      this.speakers.play(audioFrame),
      this.screen.render(videoFrame, subtitle),
    ];
  }
}

// --- demo ---
const player = new VideoPlayerFacade();
console.log(player.play("matrix.mp4", "matrix.srt"));
