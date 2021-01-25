import ErrorRepository from './ErrorRepository';
export default class Settings {
  constructor(theme, music, difficulty) {
    this.theme = theme;
    this.music = music;
    this.difficulty = difficulty;
    this.DEFAULT = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.THEME = ['light', 'gray'];
    this.MUSIC = ['pop', 'rock', 'chillout', 'off'];
    this.DIFFICULTY = ['normal', 'hard', 'nightmare'];
  }

  get change() {
    if (this.theme !== undefined) {
      if (!this.DEFAULT.has(this.theme)) {
        if (this.THEME.includes(this.theme)) {
          this.DEFAULT.set('theme', this.theme);
        } else {
          console.error(new ErrorRepository().translate(196));
        }
      }
    }
    if (this.music !== undefined) {
      if (!this.DEFAULT.has(this.music)) {
        if (this.MUSIC.includes(this.music)) {
          this.DEFAULT.set('music', this.music);
        } else {
          console.error(new ErrorRepository().translate(196));
        }
      }
    }
    if (this.difficulty !== undefined) {
      if (!this.DEFAULT.has(this.difficulty)) {
        if (this.DIFFICULTY.includes(this.difficulty)) {
          this.DEFAULT.set('difficulty', this.difficulty);
        } else {
          console.error(new ErrorRepository().translate(196));
        }
      }
    }
    return this.DEFAULT;
  }
}
