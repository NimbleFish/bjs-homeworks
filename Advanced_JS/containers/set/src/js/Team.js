import ErrorRepository from './../../../map/src/js/ErrorRepository';
export default class Team {
  constructor() {
    this.team = new Set();
  }

  add(member) {
    let access = true, obj = this.team;
    for (let prop in member) {
      if (member.hasOwnProperty(prop)) {
        for (let org in obj) {
          if (obj.hasOwnProperty(org)) {
            if (prop === org) {
              access = false;
              break;
            }
          }
        }
      }
    }
    if (access) {
      this.team.add(member);
    } else {
      console.error(new ErrorRepository().translate(224));
    }
  }

  addAll(...args) {
    for (let i = 0; i < args.length; i++) this.team.add(args[i]);
  }

  toArray() {
    let result = [];
    for (let val of this.team) result.push(val);
    return result;
  }
}
