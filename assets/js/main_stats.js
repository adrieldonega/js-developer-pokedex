// Convert Pokémon data to HTML
function convertPokeToHtml(pokemon) {
    const stats = pokemon.stats.reduce((acc, stat) => {
        acc[stat.stat.name] = stat.base_stat;
        return acc;
    }, {});

    const tipoPokemon = pokemon.types[0].type.name.toLowerCase();
    document.body.classList.add(tipoPokemon);

    return `
        <div class="pokemon">
            <span class="name">${pokemon.name}</span>
            <span class="number">#${pokemon.id}</span>
        </div>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map(type => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
        </div>

        <div class="stats">
            <p class="statsTitle">Base Stats</p>
            <ol class="statsDetail">
                ${Object.entries(stats).map(([statName, value]) => `
                    <li>${statName.charAt(0).toUpperCase() + statName.slice(1)}  ------------------------------------  ${value}</li>
                `).join('')}
            </ol>
        </div>`;
}

// Load Pokémon data
async function loadPokemonData(pokeId) {
    const pokemon = await fetchPokemonData(pokeId);
    if (pokemon) {
        const pokemonInfos = document.getElementById('pokemonStats');
        pokemonInfos.innerHTML = convertPokeToHtml(pokemon);
    }
}

// Get Pokémon ID from URL
function getPokemonIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

document.addEventListener("DOMContentLoaded", () => {
    const pokemonId = getPokemonIdFromUrl();
    if (pokemonId) {
        loadPokemonData(pokemonId);
    }
});
