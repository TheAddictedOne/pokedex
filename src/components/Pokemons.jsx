import { Component } from 'react'

class Pokemons extends Component {
  renderPokemons() {
    return this.props.pokemons.map((pokemon, key) => {
      return (
        <li key={key}>
          <img src={pokemon.src} />
          <span>{pokemon.name}</span>
        </li>
      )
    })
  }

  render() {
    return this.renderPokemons()
  }
}

export default Pokemons
