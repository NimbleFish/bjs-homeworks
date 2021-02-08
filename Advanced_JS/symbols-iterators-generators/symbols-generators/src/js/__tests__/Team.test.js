import Team from '../Team';
const team = new Team();

let teamList = [
  {name:'Лучник',type:'Bowman',health:50,level:1,attack:40,defence:10},
  {name:'Маг',type:'Magician',health:100,level:4,attack:34,defence:15},
  {name:'Мечник',type:'Swordsman',health:120,level:2,attack:65,defence:50}
];

test('generator test', () => {
  let i = 0;
  for (let obj of team) {
    expect(obj).toEqual(teamList[i]);
    i++;
  }
});
