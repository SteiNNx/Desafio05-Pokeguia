export const BASE_URL_API = 'https://pokeapi.co/api/v2/';
export const GET_POKEMON_BY_NAME = valueNamePokemon => `pokemon/${valueNamePokemon}`;

/**
 * 
 * @param {string} valueNamePokemon 
 * @returns 
 */
export const getPokemonDetailByName = async (valueNamePokemon) => {
    return await fetch(`${BASE_URL_API}${GET_POKEMON_BY_NAME(valueNamePokemon.toLowerCase())}`)
        .then(response => response.json())
        .then(responseJson => {
            return pokemonResource(responseJson);
        })
        .catch(error => {
            console.error({ error });
        })
}

export const pokemonResource = bodyResponsePokemon => {
    return {
        habilidades: bodyResponsePokemon.abilities,
        movimientos: bodyResponsePokemon.moves,
        imagen: bodyResponsePokemon.sprites.front_default,
    }
}