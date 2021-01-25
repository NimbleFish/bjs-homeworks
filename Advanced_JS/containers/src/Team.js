import ErrorRepository from './ErrorRepository';
export default class Team {
  constructor() {
    this.team = new Set();
  }

  add(member) {
    if (!this.team.has(member)) {
      this.team.add(member);
    } else {
      // throw('Уже есть в комманде!');
      console.error(new ErrorRepository().translate(224));
    }
  }

  addAll(...args) {
    for (let i = 0; i < args.length; i++) {
      this.team.add(args[i]);
    }
  }

  toArray() {
    let result = [];
    for (let val of this.team) {
      result.push(val);
    }
    return result;
  }
}
