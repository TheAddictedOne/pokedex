import 'src/index.scss'
import { Component } from 'react'
import Pokemons from 'src/components/Pokemons.jsx'

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

  render() {
    if (!this.state.pokemons.length) return null

    return (
      <>
        <header className="Header">
          <h1>Pokedex! (v1.0.0)</h1>
        </header>
        <Pokemons pokemons={this.state.pokemons} />
      </>
    )
  }
}

function getPokemons() {
  return fetch('./data/pokemons.json').then((response) => response.json())
}

export default App
