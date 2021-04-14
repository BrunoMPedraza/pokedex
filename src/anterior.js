import React, { Component,useState } from 'react'
import {fetchPokemons} from './components/fetchPokemons';
import Pokecard from './components/Pokecard'
import Modal from "./components/Modal";




const App = () => {
  const  [pokemons,setPokemons] = useState;
  const handlePokemons =  () => {
    fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=500").then((pokemons)=>{
      setPokemons(pokemons.results)
    }) 
  }
  {pokemons} = handlePokemons();

  return(
    return (
      <div className='fullPage'>
        <div className='showGrid'>
        {
          pokemons ? pokemons.map((pokemon)=>{
            return (
              <Pokecard url={pokemon.url}/>
            )
            }) : <div class='loader'>Loading</div>
        }
        </div>
      </div>
    )
}