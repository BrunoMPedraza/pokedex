import React from 'react'
import {fetchPokemons} from './fetchPokemons';
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
        <div className='navBar'>
            <div className='searchBar'>
                <input 
                type='text' 
                placeholder="Pokemon's name"
                onChange={onChange}>
                </input>
                <button onClick={onClick}>Buscar</button>
                <div className='searchResult'>
                    {pokemon && 
                    <p>{pokemon.name}</p>}
                </div>
            </div>
        </div>
    )
}

export default Searchbar
