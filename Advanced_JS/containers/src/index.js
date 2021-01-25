import Team from './Team';
import ErrorRepository from './ErrorRepository';
import Settings from './Settings';
const team = new Team();

team.add('Mike');
team.add('Person');
team.addAll('Mike', 23, 23, 'mief');

console.log(team.toArray());

console.log(new Settings().DEFAULT);
console.log(new Settings('gray', 'off', 'nightmare').change);
