import React from 'react'
import {fetchPokemons} from './fetchPokemons';
const {useState} = React;

const Searchbar = (props) => {
    const [search,setSearch] = useState('');

    const onChange= (e) =>{
        setSearch(e.target.value.toLowerCase());
    }

    const onClick = async() => {
        try{
            const data = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${search}`)
            props.openModal(data.id-1);
        }
        catch(err){
            console.log('Pokemon not found')
        }
        
    }
    return (
        <div className='searchBar'>
            <input 
            type='text' 
            placeholder="Pokemon's name"
            onChange={onChange}>
            </input>
            <button onClick={onClick}>Buscar</button>
        </div>
    )
}

export default Searchbar
