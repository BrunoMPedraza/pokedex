import React, { Component } from 'react'
import { fetchPokemons } from './fetchPokemons'
import {Card, CardMedia,CardContent,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

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
            <Card>
                {loading ? <p>¿Quién es este pokemon?</p> : 
                    (
                    <>
                        <CardContent>
                            <CardMedia 
                            style={{height:"200px", width:"400px" }}
                            image={img}>
                            </CardMedia>
                             <Typography component='p'  variant='h6'>{name.charAt(0).toUpperCase() + name.slice(1)}</Typography>
                            <Typography variant='h6' color='textSecondary'>#{id}</Typography>
                        </CardContent>
                    </>
                    )
                }
            </Card>
            // <div className='pokeStructure'>
            // {loading ? <p>¿Quién es este pokemon?</p> : 
            //     (
            //     <>
            //     <img src={img} alt={`${name}'s front`}/>
            //     <div className='title'>{name.charAt(0).toUpperCase() + name.slice(1)}</div>
            //     <div className='id'>#{id}</div>
            //     </>
            //     )
            // }
            // </div>
       
        )
    }
}
