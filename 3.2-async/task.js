class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId=null;
  }

  addClock(id, time, callback) {
    let allow = true;
    if(!id) {
      console.error('Нет id!');
    }

    if (this.alarmCollection.length == 0) {
      this.alarmCollection.push({ id, time, callback });
    }
    else {
      for (let i=0; i < this.alarmCollection.length; i++) {
        if(this.alarmCollection[i].id == id) {
          console.error('Будильник с id: ' + this.alarmCollection[i].id + ' уже существует!');
          allow = false;
        }
        else {
          allow = true;
        }
      }
      if (allow == true) {
        this.alarmCollection.push({ id, time, callback });
      }
    }
  }

  removeClock(id) {
    this.alarmCollection.forEach((el, i) => {
      if(el.id == id) {
        this.alarmCollection[i] = '';
        return true;
      }
      return false;
    });
  }

  getCurrentFormattedTime() {
    return `${new Date().getHours()}:${new Date().getMinutes()}`;
  }

  start() {
    // function checkClock(el) {
    //   let time = new AlarmClock().getCurrentFormattedTime();
    //   if(time == el.time) {
    //     callback();
    //     console.log('Callback');
    //   }
    // }

    function checkClock(el) {
        if(new AlarmClock().getCurrentFormattedTime() == el.time) {
          console.log('Я сработал!');
          return el.id;
        }
    }

    this.timerId = setInterval(()=> { this.alarmCollection.forEach((el) => {
        checkClock(el);
      })
    });
  }

  stop() {

  }

  printAlarms() {
    this.alarmCollection.forEach((el, i) => {
      console.log(`id:${el.id}, time ${el.time}`);
    });

  }

  clearAlarms() {
    this.alarmCollection.forEach((el, i) => {
      clearInterval(el.id);
      this.alarmCollection = new AlarmClock().alarmCollection;
    });
    return 'complete';
  }
}
