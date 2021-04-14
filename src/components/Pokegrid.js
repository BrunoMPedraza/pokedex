import React from 'react'
import {fetchPokemons} from './fetchPokemons';
import Pokecard from './Pokecard';
const {useState,useEffect} = React;

const Searchbar = () => {
    const [pokemons,setPokemons] = useState();
    const [loading,setLoading] = useState(false);
    const pokeFetch = async() =>{
        const data = await fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=10');
        const promise = data.results.map(async (p)=>{
            return await fetchPokemons(p.url)
        })
        const results = await Promise.all(promise);
        setLoading(true);
        setPokemons(results);
    }

    useEffect(()=>{
        pokeFetch();
    },[])

    return (
    <>
        {
            (!pokemons) ? (<img className='loader 'src='https://i.imgur.com/Zan8Ltj.gif' alt='loading'/>)
            : 
            (<div className='showGrid'>
                {pokemons.map((pokemon,idx)=>{
                return (
                    <div>
                        <Pokecard pokemons={pokemon} key={idx}/>
                    </div>);
                })}
            </div>)
        }
    </>

    )
}

export default Searchbar
