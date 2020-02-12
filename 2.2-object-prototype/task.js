function getAnimalSound(animal) {
    if (animal == undefined) {
      return null;
    }
    let sound = animal.sound;
    return sound;
}

function getAverageMark(marks) {
    let avarage = 0, roundedAverage;

    for (let i=0; i<marks.length; i++) {
      marks[i] = parseInt(marks[i]);
      avarage += marks[i];
    }
    avarage = avarage / marks.length;
    return roundedAverage = Math.round(avarage);
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}
