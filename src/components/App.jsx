import { Component } from 'react'
import Box from 'src/components/Box.jsx'
import Navigation from 'src/components/Navigation.jsx'
import { getBoxes } from 'src/utils.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.selectTab = this.selectTab.bind(this)
    this.count = this.count.bind(this)
    this.recount = this.recount.bind(this)

    this.state = {
      currentTab: null,
      boxes: [],
      pokemonCaught: '-',
      max: '-',
    }
  }

  selectTab(event) {
    const { tab: currentTab, src } = event.target.dataset
    this.setState({ currentTab, boxes: [], pokemonCaught: '-', max: '-' })
    getBoxes(src).then(({ boxes, max }) => {
      const pokemonCaught = this.count(boxes)
      this.setState({ boxes, pokemonCaught, max })
    })
  }

  count(boxes) {
    let counter = 0
    boxes.forEach((pokemons) => {
      pokemons.forEach((name) => {
        if (localStorage.getItem(name)) counter++
      })
    })
    return counter
  }

  recount(event) {
    this.setState({ pokemonCaught: this.count(this.state.boxes) })
  }

  render() {
    const { currentTab, boxes, pokemonCaught, max } = this.state

    return (
      <div className="App">
        <header className="Header">
          <div className="title">
            <img src="./images/pokeball.png" />
            <h1>Pokedex!</h1>
          </div>
          <Navigation onClick={this.selectTab} currentTab={currentTab} />
        </header>
        <main onClick={this.recount}>
          {boxes.map((pokemons, key) => <Box key={key} num={key + 1} pokemons={pokemons} />)}
        </main>
        <footer className="Footer">
          <div>Version 1.3.0</div>
          <div>{pokemonCaught}/{max}</div>
        </footer>
      </div>
    )
  }
}

export default App
