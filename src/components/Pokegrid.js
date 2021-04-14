import React from 'react'
import {fetchPokemons} from './fetchPokemons';
import SecondFetch from './SecondFetch';
const {useState,useEffect} = React;

const Searchbar = () => {
    const [pokemons,setPokemons] = useState([]);

    const pokeFetch = async() =>{
        const data = await fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=500');
        const promise = data.results.map(async (p)=>{
            return await fetchPokemons(p.url)
        })
        const results = await Promise.all(promise);
        setPokemons(results);
    }

    useEffect(()=>{
        pokeFetch();
    },[])

    return (
        <div className='fullPage'>
        <div className='showGrid'>
        {
            (!pokemons) ? (<div>noay</div>)

            : (<div>
                {pokemons.map((pokemon,idx)=>{
                return <SecondFetch pokemons={pokemon}/>;
                })}
                </div>)
        }
       {/* { pokemons ? { return(<Pokecard pokemons={pokemons}/>)}
         : return(<div></div>)
        } */}
        </div>
        </div>
    )
}

export default Searchbar
