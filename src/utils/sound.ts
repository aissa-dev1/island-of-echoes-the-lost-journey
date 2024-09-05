const sound = (src: string): HTMLAudioElement => new Audio(`/sounds/${src}`);

class SoundController {
  private islandMusicPlayed = false;
  private currentPlayedSound: HTMLAudioElement | null = null;

  readonly islandMusic = sound("/island-music.mp3");
  readonly clickSound = sound("/click.mp3");
  readonly swordSound = sound("/sword.mp3");

  constructor() {
    this.islandMusic.loop = true;
  }

  playIslandMusic() {
    if (this.islandMusicPlayed) return;

    this.islandMusic.play();
    this.islandMusicPlayed = true;
  }

  pauseIslandMusic() {
    this.islandMusic.pause();
    this.islandMusicPlayed = false;
  }

  play(audio: HTMLAudioElement) {
    if (this.currentPlayedSound !== null) {
      this.currentPlayedSound.pause();
      this.currentPlayedSound.currentTime = 0;
    }

    audio.play();
    this.currentPlayedSound = audio;
  }

  mute(audio: HTMLAudioElement) {
    audio.volume = 0;
  }

  unmute(audio: HTMLAudioElement) {
    audio.volume = 1;
  }

  muteAll(audioList: Array<HTMLAudioElement>) {
    audioList.forEach((audio) => {
      audio.volume = 0;
    });
  }

  unmuteAll(audioList: Array<HTMLAudioElement>) {
    audioList.forEach((audio) => {
      audio.volume = 1;
    });
  }
}

export const soundController = new SoundController();
