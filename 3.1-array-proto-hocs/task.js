//Code задача: https://github.com/netology-code/bjs-homeworks/tree/master/3.1-array-proto-hocs
function sleep(milliseconds) {
  let sleep = new Date().getTime() + milliseconds;
  while(new Date.getTime() <= sleep) {};
}

function sum(...args) {
  sleep(500);
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  if (arr1.length == arr2.length && Array.isArray(arr1) && Array.isArray(arr2)) {
    return arr1.every( (el, i, arr1) => { return arr1[i] === arr2[i]; } );
  }
  else {
    console.log('Ложь');
    return false;
  }
}

console.log(compareArrays([1,2,3],[1,2,3]));

function memorize(fn, limit) {
  fn();

  let results = [ {
    'args' : args,
    'result' : result,
  }, ];

  return () => {  };
}
