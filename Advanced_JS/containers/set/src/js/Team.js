export default class Team {
  constructor() {
    this.team = new Set();
  }

  add(member) {
    this.access = true;
    for (const prop of this.team.entries()) {
      prop.forEach((item) => {
        if (item === member) this.access = false;
      });
      if (this.access === false) break;
    }
    if (this.access === false) {
      return 'Такой персонаж уже есть в команде';
    }
    this.team.add(member);
    return 'Complete';
  }

  addAll(...members) {
    members.forEach((member) => this.team.add(member));
  }

  toArray() {
    return Array.from(this.team);
  }
}
