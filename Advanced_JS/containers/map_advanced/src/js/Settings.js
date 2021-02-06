export default class Settings {
  constructor(theme, music, difficulty) {
    this.theme = theme;
    this.music = music;
    this.difficulty = difficulty;
    this.DEFAULT = new Map([['theme', 'dark'],['music', 'trance'],['difficulty', 'easy']]);
    this.THEME = ['light', 'gray'];
    this.MUSIC = ['pop', 'rock', 'chillout', 'off'];
    this.DIFFICULTY = ['normal', 'hard', 'nightmare'];
  }

  get change() {
    if (this.theme !== undefined) {
      if (!this.DEFAULT.has(this.theme) && this.THEME.includes(this.theme)) {
        this.DEFAULT.set('theme', this.theme);
      } else {
        return 'Нет такой настройки';
      }
    }
    if (this.music !== undefined) {
      if (!this.DEFAULT.has(this.music) && this.MUSIC.includes(this.music)) {
        this.DEFAULT.set('music', this.music);
      } else {
        return 'Нет такой настройки';
      }
    }
    if (this.difficulty !== undefined) {
      if (!this.DEFAULT.has(this.difficulty) && this.DIFFICULTY.includes(this.difficulty)) {
        this.DEFAULT.set('difficulty', this.difficulty);
      } else {
        return 'Нет такой настройки';
      }
    }
    return (this.theme == undefined && this.music == undefined && this.difficulty == undefined) ? 'А хде данные?' : this.DEFAULT;
  }

  toArray(map) {
    return Array.from(map);
  }
}
