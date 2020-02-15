function getAnimalSound(animal) {
    if (animal == undefined) {
      return null;
    }
    let sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    if(marks == '' || marks == 0 || marks.empty) {
      return 0;
    }
    let avarage = 0, roundedAverage;
    for (let i=0; i<marks.length; i++) {
      marks[i] = parseInt(marks[i]);
      avarage += marks[i];
    }
    avarage = avarage / marks.length;
    return roundedAverage = Math.round(avarage);
}

function checkBirthday(birthday) {
    birthday = birthday.split('-');
    window.h = birthday[0];
    window.m = birthday[2];
    let count=0, age=0, nStanadrtYear=31622400000, standYear=31536000000, currentYear=0,  date = new Date(),
    now = `${date.getDay()} ${date.getMonth()+1} ${date.getFullYear()}`, diff=0;
    birthday[0] = m; birthday[2] = h; delete(m); delete(h);
    age = date.getFullYear() - parseInt(birthday[2]);
    // for (let k=0; k<age; k++) {
    //   if (parseInt(birthday[2])%4 == 0) {
    //     //Считыет высокосный год
    //     currentYear = currentYear + nStanadrtYear;
    //   }
    //   else {
    //     currentYear = currentYear + standYear;
    //   }
    // }
    console.log(age);
    if (age >= 18) {
      return true;
    }
    else {
      return false;
    }
}
