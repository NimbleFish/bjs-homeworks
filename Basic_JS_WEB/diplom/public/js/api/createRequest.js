/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    xhr.responseType = options.responseType;
    xhr.withCredentials = true;
    if(options.method === "GET") {
      options.url += "?";
      for (let data in options.data) {
        options.url += `${data}=${options.data[data]}&`;
      }
      options.url = options.url.substring(0, options.url.length-1);
      xhr.open(options.method, options.url);
      try {
        xhr.send(options.data);
        xhr.addEventListener('readystatechange', () => {
          if(xhr.readyState === xhr.DONE) {
            console.log(xhr.responseText);
          }
        });
      } catch(error) {
        console.error(error);
      }
      return xhr;
    } else {
      const formData = new FormData();
      xhr.open(options.method, options.url);
      try {
        xhr.send(formData);
        xhr.addEventListener('readystatechange', () => {
          if(xhr.readyState === xhr.DONE) {
            console.log(xhr);
          }
        });
      } catch(error) {
        console.error(error);
      }
      return xhr;
    }
};

createRequest({
  'url' : 'http://localhost:8000/user/login',
  'responseType' : 'json',
  'method' : 'GET',
  'data' : {
    'mail': 'test@test.ru',
    'password': 'test11111111'
  }
});
