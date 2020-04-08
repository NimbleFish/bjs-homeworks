/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ({url, data, responseType, method}) => {
    const xhr = new XMLHttpRequest;
    try {
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', responseType);
      xhr.send(data);
      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
          console.log(xhr.responseText);
        }
      });
    } catch (e) {
      console.log(e);
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
