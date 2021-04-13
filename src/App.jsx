import React, { Component } from 'react'
import {fetchPokemons} from './components/fetchPokemons';
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
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
      <>
        <CssBaseline/>
          <AppBar position='relative'>
            <Toolbar>
              <SearchIcon/>
              <Typography variant='h6'>Buscar</Typography>
            </Toolbar>
          </AppBar>
          <div className='fullPage'>
            <div className='showGrid'>
            {
              pokemons ? pokemons.map((pokemon)=>{
                return (
                  <Pokecard url={pokemon.url}/>
                )
                }) : <Typography variant='h1'>Loading</Typography>
            }
            </div>
          </div>
      </>
    )
  }
}
