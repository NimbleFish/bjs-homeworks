export default class Team {
  constructor() {
    this.team = new Set();
  }

  add(member) {
    let access = true;
    for (const prop of this.team.entries()) {
      prop.forEach((item) => {if (item === member) access = false;});
      if (access === false) break;
    }
    if (access === false) {
      return 'Такой персонаж уже есть в команде';
    } else {
      this.team.add(member);
      return 'Complete';
    }
  }

  addAll(...members) {
    members.forEach((member) => this.team.add(member));
  }

  toArray() {
    return Array.from(this.team);
  }
}
