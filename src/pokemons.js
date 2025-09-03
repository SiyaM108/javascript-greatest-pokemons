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

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
