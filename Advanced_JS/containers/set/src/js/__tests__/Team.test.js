import Team from '../Team';

const team = new Team();
test('Add "Mike"', () => {
  team.add('Person');
  expect(team.add('Mike')).toEqual('Complete');
  team.addAll('Mike', 23, 23, 'mief');
});

test('addAll', () => {
  expect(team.toArray()).toEqual(['Person', 'Mike', 23, 'mief']);
});

test('Repeat "Mike"', () => {
  expect(team.add('Mike')).toEqual('Такой персонаж уже есть в команде');
});
