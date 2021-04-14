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
    const {name,id,sprites} = props.pokemons;
    const {front_default} = sprites;
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev)
        console.log(name)
    }
    
    return (
        <div className='pokeCard' key={name} onClick={openModal}>
            <div className='image'>
                <img src={front_default} alt={name + "'s front"}></img>
            </div>
            <Name>
                {name.replace('-',' ').charAt(0).toUpperCase()+name.slice(1)}
            </Name>
            <Id>
                #{id}
            </Id>
            <Modal 
            showModal={showModal} 
            setShowModal={setShowModal}/>
        </div>
    )
}

export default Pokecard
