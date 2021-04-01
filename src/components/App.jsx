import 'src/index.scss'
import { Component } from 'react'
import Box from 'src/components/Box.jsx'
import Navigation from 'src/components/Navigation.jsx'
import Pokemons from 'src/components/Pokemons.jsx'

const URL_GALAR = './data/pokemons.json'
const URL_ISOLARMURE = './data/galar-isolarmure.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.selectTab = this.selectTab.bind(this)
    this.refreshCounter = this.refreshCounter.bind(this)

    this.state = {
      currentTab: null,
      boxes: []
    }

    getBoxes(URL_GALAR).then(({ boxes, max }) => {
      this.setState({ boxes, max })
    })
  }

  selectTab(event) {
    console.log(event)
    this.setState({ currentTab: event.target.dataset.tab })
  }

  refreshCounter() {
    this.forceUpdate()
  }

  render() {
    const { currentTab, boxes, max } = this.state
    if (!boxes.length) return null

    return (
      <div className="App" onClick={this.refreshCounter}>
        <header className="Header">
          <h1>Pokedex! (v1.2.0)</h1>
          <Navigation onClick={this.selectTab} currentTab={currentTab} />
        </header>
        <main>
          {boxes.map((pokemons, key) => <Box key={key} num={key + 1} pokemons={pokemons} />)}
        </main>
        <footer className="Footer">
          <div>{localStorage.length}/{max}</div>
        </footer>
      </div>
    )
  }
}

function getBoxes(url) {
  return fetch(url)
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
