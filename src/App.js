import React, { Component } from 'react'
import {fetchPokemons} from './components/fetchPokemons';
import Pokecard from './components/Pokecard'

export default class App extends Component {
  constructor(props){
    super(props)

    this.state ={
      pokemons:''
    }
  }

  componentDidMount() {
      fetchPokemons("https://pokeapi.co/api/v2/pokemon?limit=500").then((pokemons)=>{
        this.setState({
        pokemons:pokemons.results,
      })
    })
  };

  render() {
    const {pokemons} = this.state;
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
}
