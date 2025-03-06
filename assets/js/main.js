const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 10;
let offset = 0;

function createPokemonElement(pokemon) {
    const li = document.createElement('li');
    li.classList.add('pokemon', pokemon.type);
    li.onclick = () => goToDetails(pokemon.number);

    const numberSpan = document.createElement('span');
    numberSpan.classList.add('number');
    numberSpan.textContent = `#${pokemon.number}`;
    
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('name');
    nameSpan.textContent = pokemon.name;

    const detailDiv = document.createElement('div');
    detailDiv.classList.add('detail');

    const typesOl = document.createElement('ol');
    typesOl.classList.add('types');
    pokemon.types.forEach(type => {
        const liType = document.createElement('li');
        liType.classList.add('type', type);
        liType.textContent = type;
        typesOl.appendChild(liType);
    });

    const img = document.createElement('img');
    img.src = pokemon.photo;
    img.alt = pokemon.name;

    detailDiv.appendChild(typesOl);
    detailDiv.appendChild(img);

    li.appendChild(numberSpan);
    li.appendChild(nameSpan);
    li.appendChild(detailDiv);

    return li;
}

function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then(pokemons => {
        pokemons.forEach(pokemon => {
            pokemonList.appendChild(createPokemonElement(pokemon));
        });
    });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItems(offset, limit);
});

// Open stats page
function goToDetails(pokemonId) {
    window.location.href = `stats.html?id=${pokemonId}`;
}
