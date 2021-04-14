import React from 'react';
import {fetchPokemons} from './fetchPokemons';
import Pokecard from './Pokecard';
const {useState,useEffect} = React;

const SecondFetch = (props) => {
    const {pokemons} = props;
    const {name,id,sprites} = pokemons;
    const {front_default} = sprites;
    
    return (
        <div key={name}>
        {name}
        {id}
        <img src={sprites.front_default} alt={name + "'s front"}></img>
        
        {/* {
            
            (!pokemons) ? (<div>noay</div>)

            : (<div>
                {pokemons.map((poke,idx)=>{
                return (<>
                    {poke.name}
                    </>);
                })}
                </div>)
        } */}
        </div>
    )
}

export default SecondFetch
