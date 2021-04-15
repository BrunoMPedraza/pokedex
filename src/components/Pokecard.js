import React from 'react';
import Modal from './Modal';
import '../pokeCard.css';
const {useState} = React;




const Pokecard = (props) => {
    const {name,id,sprites,height,weight,abilities,types} = props.pokemons;
    const {"generation-v":generationv} = sprites.versions;
    const {"black-white":black} = generationv;
    const {animated} = black
    const [showModal, setShowModal] = useState(false);
    const {"0":type1,"1":type2} = types;

    
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
