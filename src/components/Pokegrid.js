import React from 'react'
import {fetchPokemons} from './fetchPokemons';
import Pokecard from './Pokecard';
import Modal from './Modal';
const {useState,useEffect} = React;

const Pokegrid = () => {
    const [pokemons,setPokemons] = useState();
    const [loading,setLoading] = useState(false);
    const [showModal,setShowModal] = useState(false);
    const [pickedPokemon,setPickedPokemon] = useState();

    
    const pokeFetch = async() =>{
        const data = await fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=649');
        const promise = data.results.map(async (p)=>{
            return await fetchPokemons(p.url)
        })
        const results = await Promise.all(promise);
        setPokemons(results);
        setLoading(true);
    }

    const turnModal= (e) => {
        console.log(pokemons[e-1])
        openModal(e-1)
    }


    const openModal = (index) => {
        setShowModal(true);
        setPickedPokemon(index);
    }


    useEffect(()=>{

        pokeFetch();
    },[])

    return (
    <>
        {
            (!loading) ? (<img className='loader 'src='https://i.imgur.com/Zan8Ltj.gif' alt='loading'/>)
            : 
            (<div className='showGrid'>
                {pokemons.map((pokemon,idx)=>{
                
                return (                           
                    <div>
                        <Pokecard 
                        pokemons={pokemon} 
                        key={idx}
                        arrayIndex={idx}
                        openModal={openModal}
                        /> 

                        
                    </div>);
                })}
                {(pokemons[pickedPokemon]) ? <div className='modal'>
                        <Modal 
                            showModal={showModal} 
                            setShowModal={setShowModal}
                            pokemon={pokemons[pickedPokemon]}
                            index={pickedPokemon}
                            amount={pokemons}
                            left={pokemons[pickedPokemon-1] ? pokemons[pickedPokemon-1] : pokemons[pokemons.length-1]}
                            right={pokemons[pickedPokemon+1] ? pokemons[pickedPokemon+1] : pokemons[0]}
                            turnModal={turnModal}
                         />
                </div> : null}
            </div>)
        }
    </>
    )
}
export default Pokegrid