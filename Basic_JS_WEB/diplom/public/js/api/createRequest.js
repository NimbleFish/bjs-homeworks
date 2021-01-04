const createRequest = (options = {}) => {
  try {
    if (options.method && options.url) {
      const xhr = new XMLHttpRequest();
      if (options.method == 'GET') {
        let url = '';
        for (let prop in options.data) {
          url += `${prop}=${options.data[prop]}&`;
        }
        xhr.open(options.method, options.url + '?' + url, true);
      } else {
        xhr.open(options.method, options.url, true);
      }
      if (options.headers) {
        for (let header in options.headers) {
          xhr.setRequestHeader(header, options.headers[header]);
        }
      }
      if (options.data && options.method == 'POST') {
        let formData = new FormData(), data;
        for (let prop in options.data) {
          formData.append(prop, options.data[prop]);
        }
        xhr.send(data);
      } else {
        xhr.send();
      }
      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
          options.callback(null, xhr);
        }
      });
    } else {
      options.callback("Отказ создания запроса, проверьте метод и url запроса", null);
    }
  } catch (e) {
    options.callback(e, null);
  }
}
