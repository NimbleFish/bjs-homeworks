import Team from './Team';

const team = new Team();

team.add('Mike');

team.add('Person');
team.addAll('Mike', 23, 23, 'mief');

console.log(team.toArray());
