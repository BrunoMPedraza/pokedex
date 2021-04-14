import React from 'react'
import {fetchPokemons} from './fetchPokemons';
import Pokecard from './SecondFetch';
const {useState} = React;

const Searchbar = () => {
    const [search,setSearch] = useState('');
    const [pokemon,setPokemon] = useState();

    const onChange= (e) =>{
        setSearch(e.target.value.toLowerCase());
    }
    const onClick = async(e) => {
        const data = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${search}`)
        console.log(data)
        setPokemon(data);
    }
    return (
        <div>
            <input 
            type='text' 
            placeholder='Buscar'
            onChange={onChange}>
            </input>
            <p>{search}</p>
            <button onClick={onClick}>Buscar</button>
            <div>
            {pokemon && 
            <p>{pokemon.name}</p>}
            </div>
        </div>
    )
}

export default Searchbar
