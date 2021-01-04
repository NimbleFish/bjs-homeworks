class Entity {
  construstor() {
    Entity.URL = '';
  }
  static list( data, callback = f => f ) {
    createRequest({
      'url': Entity.URL,
      'method': 'GET',
      'headers': {
        'responseType': 'json',
      },
      'data': data,
      'callback': callback
    });
  }

  static create( data, callback = f => f ) {
    let res_data = Object.assign({'_method': 'PUT'}, data);
    createRequest({
      'url': Entity.URL,
      'method': 'POST',
      'headers': {
        'responseType': 'json',
      },
      'data': res_data,
      'callback': callback
    });
  }

  static get( id = '', data, callback = f => f ) {
    createRequest({
      'url': Entity.URL + '/' + id,
      'method': 'GET',
      'headers': {
        'responseType': 'json',
      },
      'data': data,
      'callback': callback
    });
  }

  static remove( id = '', data, callback = f => f ) {
    let res_data = Object.assign({'id': id}, data);
    res_data = Object.assign({'_method': 'DELETE'}, res_data);
    createRequest({
      'url': Entity.URL,
      'method': 'POST',
      'headers': {
        'responseType': 'json',
      },
      'data': res_data,
      'callback': callback
    });
  }
}
