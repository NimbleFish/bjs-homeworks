// Основная функция для совершения запросов на сервер.
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;
  xhr.withCredentials = true;
  const formData = new FormData();
  if (options.method === "GET") {
    xhr.responseType = '';
    options.url += "?";
    for (let data in options.data) {
      options.url += `${data}=${options.data[data]}&`;
    }
    options.url = options.url.substring(0, options.url.length - 1);
  } else {
    xhr.responseType = options.responseType;
    for (let data in options.data) {
      formData.append(`${data}`, `${options.data[data]}`);
    }
  }
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      options.callback(xhr.response.error, xhr.response);
    }
  });
  xhr.open(options.method, options.url);
  try {
    options.url.indexOf('?') > -1 ? xhr.send() : xhr.send(formData);
  } catch (error) {
    console.error(error);
  }
};
