const fetchResource = (resource, id) => fetch(`https://pokeapi.co/api/v2/${resource}/${id}`)
  .then( res => res.json())
  .then(data => console.log(data))


// fetchResource('pokemon', 1)

let fetchPokemon = id => fetchResource('pokemon', id)

// fetchPokemon(6)

let fetcher = resource => id => fetchResource(resource, id)

fetchPokemon = fetcher('pokemon')
const fetchPokemonType = fetcher('type')
fetchPokemon(9)
fetchPokemonType(9)