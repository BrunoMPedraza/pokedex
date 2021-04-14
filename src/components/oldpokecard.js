import React, { Component } from 'react'
import { fetchPokemons } from './fetchPokemons'

export default class Pokecard extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            img:'',
            id:'',
            loading:true,
        }
    }

    componentDidMount(){
        const {url} = this.props
        fetchPokemons(url).then((pokemons)=>{
            this.setState({
                name:pokemons.name,
                img:pokemons.sprites.front_default,
                id:pokemons.id,
                loading:false,
            })
        }
        
        )
    }

    render() {
        const {name,id,img,loading} = this.state;

        return (
            <div className='pokeStructure'>
            {loading ? <p>¿Quién es este pokemon?</p> : 
                (
                <>
                <img src={img} alt={`${name}'s front`}/>
                <div className='title'>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
                <div className='id'>#{id}</div>
                </>
                )
            }
            </div>
       
        )
    }
}
