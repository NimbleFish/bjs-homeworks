const createRequest = (options = {}) => { // Основная функция для совершения запросов на сервер.
  const xhr = new XMLHttpRequest, formData = new FormData();
  xhr.withCredentials = true;
  if (options.method === "GET") {
    xhr.responseType = ''; options.url += "?";
    for (let data in options.data) { options.url += `${data}=${options.data[data]}&`; }
    options.url = options.url.substring(0, options.url.length - 1);
  } else {
    xhr.responseType = options.responseType;
    for (let data in options.data) { formData.append(`${data}`, `${options.data[data]}`); }
  }
  xhr.addEventListener('readystatechange', () => { if (xhr.readyState === xhr.DONE) { options.callback(xhr.response.error, xhr.response); } });
  xhr.open(options.method, options.url);
  try { xhr.send(formData); } catch (error) { console.error(error); }
  return xhr;
};
