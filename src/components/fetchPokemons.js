
export const fetchPokemons = async(customUrl) => {
    const url = customUrl;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}