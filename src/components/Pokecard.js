import React from 'react';
import '../pokeCard.css';




const Pokecard = (props) => {
    const {name,id,sprites} = props.pokemons;
    const {"generation-v":generationv} = sprites.versions;
    const {"black-white":black} = generationv;
    
    const capitalizedName= (name.replace('-',' ').charAt(0).toUpperCase()+name.slice(1))
    const formattedId = ('000'+id).slice(-3);
    const modalTest = () =>{
        props.openModal(props.arrayIndex);
    }

    return (
        <div className='pokeCard' key={name} onClick={modalTest}>
            <div className='image'>
                <img src={black.front_default} alt={name + "'s front"}></img>
            </div>
            <div className='pokeName'>
                {capitalizedName}
            </div>
            <div className='id'>#{formattedId}</div>
            <div className='modal'>

            </div>
        </div>
    )
}

export default Pokecard
