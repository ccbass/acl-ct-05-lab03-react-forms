export const getAllPokemon = async () => {
    const rawData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const jsonData = await rawData.json()

    return jsonData.results
}

export const getOnePokemon = async (id) => {
    const rawData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const jsonData = await rawData.json()

    return jsonData
}
