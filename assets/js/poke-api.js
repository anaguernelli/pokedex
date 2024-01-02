// Este objeto deve ser importado no html para ser processado
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}$${limit}=10`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .catch((error) => console.error(error))
}
