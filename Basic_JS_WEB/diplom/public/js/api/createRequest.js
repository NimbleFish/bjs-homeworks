/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = ({url, headers, data, responseType, method}) => {
    const xhr = new XMLHttpRequest;
    try {
      xhr.open(method, url, true);
      xhr.setRequestHeader(headers, responseType);
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

// Запрос
createRequest({ 'url' : 'http://localhost:8000/user/login?email=123&password=123', 'headers' : 'Content-Type', 'responseType' : 'application/json', 'method' : 'GET', });
