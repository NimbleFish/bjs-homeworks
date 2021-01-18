const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
  crazy: 'frog',
  zin: 123
};

export function orderByProps(obj, sort_arr) {
  let new_arr = [], another_arr = [], history_obj = {}, access_prop = [];
  for (let item in sort_arr) {
    if (sort_arr.hasOwnProperty(item)) {
      for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (prop === sort_arr[item]) {
            new_arr.push({[prop]:obj[prop]});
            history_obj[prop] = obj[prop];
          }
        }
      }
    }
  }
  for (let prop in obj) if (obj.hasOwnProperty(prop) && !history_obj.hasOwnProperty(prop)) access_prop.push(prop);
  access_prop.sort();
  for (let i = 0; i < access_prop.length; i++) another_arr.push({[access_prop[i]]: obj[access_prop[i]]});
  return new_arr.concat(another_arr);
}

console.log(orderByProps(obj, ['name', 'defence', 'health']));
