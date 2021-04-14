import React from 'react';
const {useState,useEffect} = React;

const PokeCard = (props) => {
    const {pokemon} = props;
    return (
        <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.id}</p>
        <img src={pokemon.sprite.front_default} alt="front"/>
        </div>
        
    )
}

export default PokeCard
