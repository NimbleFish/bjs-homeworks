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
    let count=0, age=0, nStanadrtYear=31622400000, standYear=31536000000, currentYear=0,
    date = new Date(),
    now = `${date.getDay()} ${date.getMonth()+1} ${date.getFullYear()}`, diff=0;
    const data = new Date(birthday), birthdayMs = +date;
    console.log(Date.now() - birthdayMs);
}
