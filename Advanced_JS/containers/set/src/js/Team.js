export default class Team {
  constructor() {
    this.team = new Set();
  }

  add(member) {
    for (const prop of this.team.entries()) {
      prop.forEach((item) => {
        if (JSON.stringify(item) === JSON.stringify(member)) throw 'Такой персонаж уже есть в команде';
      });
    }
    this.team.add(member);
  }

  addAll(...members) {
    members.forEach((member) => this.team.add(member));
  }

  toArray() {
    return Array.from(this.team);
  }
}
