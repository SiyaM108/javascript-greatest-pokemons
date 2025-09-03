// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter(pokemon => pokemon.type.includes('Fire'));
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function getShortestPokemon(pokemons) {
  let shortest = pokemons[0];

  pokemons.forEach(pokemon => {
    const height = parseFloat(pokemon.height);
    const shortestHeight = parseFloat(shortest.height);

    if (height < shortestHeight) {
      shortest = pokemon;
    }
  });

  return shortest.name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function getCandyAverage(pokemons) {
  const totalCandy = pokemons.reduce((sum, pokemon) => {
    return sum + (pokemon.candy_count || 0);
  }, 0);

  return totalCandy / pokemons.length;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
  return pokemons
    .filter(pokemon => pokemon.type.includes('Ground'))
    .slice(0, 10)
    .map(pokemon => pokemon.img);
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
  const pikachu = pokemons.find(pokemon => pokemon.name === 'Pikachu');
  const pikachuWeight = parseFloat(pikachu.weight);

  return pokemons
    .filter(pokemon => parseFloat(pokemon.weight) > pikachuWeight)
    .map(pokemon => pokemon.name);
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
  return pokemons
    .map(pokemon => pokemon.name)
    .sort()
    .slice(0, 20);
}
function getStrongPokemons(pokemons) {
  return pokemons
    .filter(pokemon => pokemon.weaknesses.length === 1)
    .slice(0, 15);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
function strongPokemons(pokemons) {
  return pokemons
    .filter(pokemon => pokemon.weaknesses.length === 1)
    .slice(0, 15);
}

module.exports = {
  getAllFirePokemons,
  getShortestPokemon,
  getCandyAverage,
  getGroundPokeImg,
  getHeavyPokemons,
  orderAlphabetically,
  strongPokemons
};
