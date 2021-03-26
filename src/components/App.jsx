import 'src/index.scss'
import { Component } from 'react'
import Box from 'src/components/Box.jsx'
import Pokemons from 'src/components/Pokemons.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.refreshCounter = this.refreshCounter.bind(this)

    this.state = {
      boxes: []
    }

    getBoxes().then(({ boxes, max }) => {
      this.setState({ boxes, max })
    })
  }

  refreshCounter() {
    this.forceUpdate()
  }

  render() {
    const { boxes, max } = this.state
    if (!boxes.length) return null

    return (
      <div className="App" onClick={this.refreshCounter}>
        <header className="Header">
          <h1>Pokedex! (v1.1.0)</h1>
        </header>
        <main>
          {boxes.map((pokemons, key) => <Box key={key} num={key + 1} pokemons={pokemons} />)}
        </main>
        <footer>
          <div className="Count">{localStorage.length}/{max}</div>
        </footer>
      </div>
    )
  }
}

function getBoxes() {
  return fetch('./data/pokemons.json')
    .then((response) => response.json())
    .then((pokemons) => {
      const POKEMONS_PER_BOX = 30
      const boxes = []
      let box
      pokemons.forEach((pokemon, i) => {
        if (i % 30 === 0) {
          box = []
          boxes.push(box)
        }
        box.push(pokemon)
      })
      return { boxes, max: pokemons.length }
    })
}

export default App
