import 'src/index.scss'

import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: []
    }

    getPokemons()
      .then((pokemons) => {
        this.setState({ pokemons })
      })
  }

  renderPokemons() {
    return this.state.pokemons.map((pokemon, key) => {
      return (
        <li key={key}>
          <img src={pokemon.src} />
          <span>{pokemon.name}</span>
        </li>
      )
    })
  }

  render() {
    if (!this.state.pokemons.length) return null

    return (
      <>
        <header className="Header">
          <h1>Pokedex! (v1.0.0)</h1>
        </header>
        <ul>
          {this.renderPokemons()}
        </ul>
      </>
    )
  }
}

function getPokemons() {
  return fetch('./data/pokemons.json').then((response) => response.json())
}

export default App
