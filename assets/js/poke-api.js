const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const types = pokeDetail.types.map(typeSlot => typeSlot.type.name);
    const [type] = types;

    return {
        number: pokeDetail.id,
        name: pokeDetail.name,
        types,
        type,
        photo: pokeDetail.sprites.other.dream_world.front_default,
    };
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then(convertPokeApiDetailToPokemon);
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    
    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => Promise.all(pokemons.map(pokeApi.getPokemonDetail)))
        .then(pokemonsDetails => pokemonsDetails);
}

// Fetch Pokémon data
async function fetchPokemonData(pokeId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados do Pokémon");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar os dados do Pokémon:", error);
        return null;
    }
}
