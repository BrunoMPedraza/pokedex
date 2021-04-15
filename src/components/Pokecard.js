import React from 'react';




const Pokecard = (props) => {
    const {name,id,sprites} = props.pokemons;
    const {"generation-v":generationv} = sprites.versions;
    const {"black-white":black} = generationv;
    
    const capitalizedName= (name.replace('-',' ').charAt(0).toUpperCase()+name.slice(1))
    const formattedId = ('000'+id).slice(-3);
    const communicateModal = () =>{
        props.openModal(props.arrayIndex);
    }

    return (
        <div className='pokeCard' key={name} onClick={communicateModal}>
            <div className='image'>
                <img src={black.front_default} alt={name + "'s front"}></img>
            </div>
            <div className='pokeName'>
                {capitalizedName}
            </div>
            <div className='id'>#{formattedId}</div>
        </div>
    )
}

export default Pokecard
