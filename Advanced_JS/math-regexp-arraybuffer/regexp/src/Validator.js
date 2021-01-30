export default class Validator {
  validateUsername(string) {
    if (string.match(/^[0-9a-z_-]+$/ig) !== null) {
      let result = string.match(/[\D]\d+[\D]/ig), access = true, accessStage2 = false;
      if (string.includes('-')) {
        if (string.match(/^[^(_0-9-)]\w+[-]\w+[^(_0-9-)]+$/isg) !== null) accessStage2 = true;
      } else {
        if (string.match(/^[^(_0-9-)]\w+[^(_0-9-)]+$/isg) !== null) accessStage2 = true;
      }
      if (accessStage2) {
        if (result !== null) for (let i = 0; i < result.length; i++) if (parseInt(result[i].substring(1)) > 999) access = false;
        if (access === true) return string;
      }
    }
  }
}
