import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import '../pokeCard.css';
const {useState} = React;




const Pokecard = (props) => {
    const {name,id,sprites,height,weight,abilities,types} = props.pokemons;
    const {"generation-v":generationv} = sprites.versions;
    const {"black-white":black} = generationv;
    const {animated} = black
    const capitalizedName= (name.replace('-',' ').charAt(0).toUpperCase()+name.slice(1))
    const [showModal, setShowModal] = useState(false);
    const {"0":type1,"1":type2} = types;

    const formattedId = ('000'+id).slice(-3);
    const openModal = () => {
        setShowModal(e => !e)
    }
    

    return (
        <div className='pokeCard' key={name} onClick={openModal}>
            <div className='image'>
                <img src={black.front_default} alt={name + "'s front"}></img>
            </div>
            <div className='pokeName'>
                {capitalizedName}
            </div>
            <div className='id'>#{formattedId}</div>
            <div className='modal'>
                
                <Modal 
                showModal={showModal} 
                setShowModal={setShowModal}
                name={capitalizedName}
                id={formattedId}
                front={animated.front_default}
                back={animated.back_default}
                height={height}
                weight={weight}
                abilities={abilities}
                type1={type1}
                type2={type2}
                />
            </div>
        </div>
    )
}

export default Pokecard
