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

    this.onModeChanged = this.onModeChanged.bind(this)
  }

  onModeChanged(event) {
    this.setState({ mode: event.target.checked })
  }

  render() {
    if (!this.state.pokemons.length) return null

    return (
      <>
        <header className="Header">
          <h1>Pokedex! (v1.0.0)</h1>
          <input id="Mode" type="checkbox" onChange={this.onModeChanged} />
          <label htmlFor="Mode">Mode</label>
        </header>
        <main>
          <Pokemons pokemons={this.state.pokemons} mode={this.state.mode} />
        </main>
      </>
    )
  }
}

function getPokemons() {
  return fetch('./data/pokemons.json').then((response) => response.json())
}

export default App
