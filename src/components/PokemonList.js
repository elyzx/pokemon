import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PokemonList extends Component {

    state = {
        pokemon: []
    }

    async componentDidMount() {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        this.setState({
            pokemon: response.data.results
        })
    }
    
    render() {

        if (this.state.pokemon.length === 0) {
            return <p>Loading . . .</p>
        }
        
        return (
            <div>
                {
                    this.state.pokemon.map((pokemon, i ) => {
                        return <p key={i}><Link to={`/pokemon/${i}`}>{pokemon.name}</Link></p>
                    })
                }
            </div>
        )
    }
}

export default PokemonList