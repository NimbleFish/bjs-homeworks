import Team from '../Team';

test('check how work Set()', () => {
  const team = new Team();
  team.add('Mike');
  team.add('Person');
  team.addAll('Mike', 23, 23, 'mief');
  expect(team.toArray()).toEqual(["Mike", "Person", 23, "mief"]);
  expect(team.add('Mike')).toEqual('В команде уже есть этот персонаж');
});
