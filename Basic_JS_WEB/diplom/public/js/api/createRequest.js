/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  let response;
  xhr.withCredentials = true;
  if(options.method === "GET") {
    xhr.responseType = '';
    options.url += "?";
    for (let data in options.data) {
      options.url += `${data}=${options.data[data]}&`;
    }
    options.url = options.url.substring(0, options.url.length-1);
    xhr.open(options.method, options.url);
    try {
      xhr.send();
    } catch(error) {
      console.error(error);
    }
    xhr.addEventListener('readystatechange', () => {
      if(xhr.readyState === xhr.DONE) {

      }
    });
  }
  else {
    xhr.responseType = options.responseType;
    const formData = new FormData();
    for (let data in options.data) {
      formData.append( `${data}`, `${options.data[data]}` );
    }
    xhr.open(options.method, options.url);
    try {
      xhr.send(formData);
    } catch(error) {
      console.error(error);
    }
    xhr.addEventListener('readystatechange', () => {
      if(xhr.readyState === xhr.DONE) {
          console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()} xhr.response`);
      }
    });
    return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}
    Завершение работы функции`;
  }
};
// createRequest({
//   'url' : 'http://localhost:8000/user/login',
//   'responseType' : 'json',
//   'method' : 'POST',
//   'data' : {
//     'email': 'test@test.ru',
//     'password': 'test11111111'
//   }
// });
