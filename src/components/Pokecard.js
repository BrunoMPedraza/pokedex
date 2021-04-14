import React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import '../pokeCard.css';
const {useState,useEffect} = React;

const StyledButton = styled.button`
    color:red;
`;
const Name = styled.div`
    font-size:1.2rem;
    font-weight:bold;
`;

const Id = styled.div`
    font-weight:italic;
    color:gray;
`;


const Pokecard = (props) => {
    const {name,id,sprites,height,weight,abilities} = props.pokemons;
    const {ability} = abilities;
    const {front_default,versions} = sprites;
    const {"generation-v":generationv} = versions;
    const {"black-white":black} = generationv;
    const {animated} = black
    const capitalizedName= (name.replace('-',' ').charAt(0).toUpperCase()+name.slice(1))
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }
    
    return (
        <div className='pokeCard' key={name} onClick={openModal}>
            <div className='image'>
                <img src={black.front_default} alt={name + "'s front"}></img>
            </div>
            <Name>
                {capitalizedName}
            </Name>
            <Id>
                #{id}
            </Id>
            <div className='modal'>
                <Modal 
                showModal={showModal} 
                setShowModal={setShowModal}
                name={capitalizedName}
                id={id}
                front={animated.front_default}
                back={animated.back_default}
                height={height}
                weight={weight}
                abilities={abilities}
                />
            </div>
        </div>
    )
}

export default Pokecard
