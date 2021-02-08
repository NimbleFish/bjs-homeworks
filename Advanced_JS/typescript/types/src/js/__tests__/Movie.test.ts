import Movie from '../Movie';

test('getInfo about film', () => {
  const avangers = new Movie('The Avangers', 'Мстители', 2012, 'USA', 'Avangers Asseble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137);
  expect(avangers.getInfo).toEqual({
    country: "USA",
    header: "Мстители",
    name: "The Avangers",
    slogan: "Avangers Asseble!",
    time: 137,
    type: ["фантастика", "боевик", "фэнтези", "приключения"],
    year: 2012
  });
});
