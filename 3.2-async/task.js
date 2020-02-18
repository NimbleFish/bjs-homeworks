class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId;
  }

  addClock(id, time, callback) {
    let allow = true;
    if(id == '' && id == undefined || id == null || id == Infinity || isNaN(id) == true) {
      console.error('Нет id!');
      allow = false;
    }

    this.alarmCollection.forEach((i, el)=>{
      if(i.id == id) {
        console.error('Нашёл! id: ' + i.id + ' == ' + id);
        allow = false;
      }
    });

    if (allow == true) {
      this.alarmCollection.push({ 'id':id, 'time':time, 'callback':callback });
    }
  }

  removeClock() {

  }

  getCurrentFormattedTime() {

  }

  start() {

  }

  stop() {

  }

  printAlarms() {

  }

  clearAlarms() {

  }
}
