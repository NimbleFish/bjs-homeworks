class User {
  construstor() {
    User.URL = '/user';
  }

  static setCurrent(user) {
    localStorage.user = JSON.stringify(user);
  }

  static unsetCurrent() {
    localStorage.removeItem('user');
  }

  static current() {
    if (localStorage.user) {
      return JSON.parse(localStorage.user);
    } else {
      return undefined;
    }
  }

  static fetch( data, callback = f => f ) {
    createRequest({
      'url': User.URL + '/current',
      'method': 'GET',
      'headers': {
        'responseType': 'json',
      },
      'data': data,
      'callback': (err, res) => {
        if (res.success == 'true') {
          User.setCurrent(res.user);
        } else {
          User.unsetCurrent();
        }
        callback(err, res);
      }
    });
  }

  static login( data, callback = f => f ) {
    createRequest({
      'url': User.URL + '/login',
      'method': 'POST',
      'headers': {
        'responseType': 'json',
      },
      'data': data,
      'callback': (err, res) => {
        if (res.success == 'true') {
          User.setCurrent(res.user);
        }
        callback(err, res);
      }
    });
  }

  static register( data, callback = f => f ) {
    createRequest({
      'url': User.URL + '/register',
      'method': 'POST',
      'headers': {
        'responseType': 'json',
      },
      'data': data,
      'callback': (err, res) => {
        if (res.success == 'true') {
          User.setCurrent(res.user);
        }
        callback(err, res);
      }
    });
  }

  static logout( data, callback = f => f ) {
    createRequest({
      'url': User.URL + '/logout',
      'method': 'POST',
      'headers': {
        'responseType': 'json',
      },
      'data': data,
      'callback': (err, res) => {
        if (res.success == 'true') {
          User.unsetCurrent();
        }
        callback(err, res);
      }
    });
  }
}
