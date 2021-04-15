
export const fetchPokemons = async(a) => {
    const url = a;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
