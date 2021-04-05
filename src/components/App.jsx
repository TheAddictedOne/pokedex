import { Component } from 'react'
import Box from 'src/components/Box.jsx'
import Navigation from 'src/components/Navigation.jsx'
import { getBoxes } from 'src/utils.js'

export default class extends Component {
  constructor(props) {
    super(props)

    this.selectTab = this.selectTab.bind(this)
    this.count = this.count.bind(this)
    this.recount = this.recount.bind(this)
    this.displayOnlyMissing = this.displayOnlyMissing.bind(this)

    this.state = {
      currentTab: null,
      boxes: [],
      pokemonCaught: '-',
      max: '-',
      onlyMissing: false,
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

  displayOnlyMissing() {
    this.setState({ onlyMissing: !this.state.onlyMissing })
  }

  render() {
    const { currentTab, boxes, pokemonCaught, max, onlyMissing } = this.state
    const classes = onlyMissing ? 'only-missing' : ''

    return (
      <div className="App">
        <header className="Header">
          <div className="title">
            <img src="./images/Pokeball.png" />
            <h1>Pokedex!</h1>
          </div>
          <input id="OnlyMissing" type="checkbox" onClick={this.displayOnlyMissing} />
          <label for="OnlyMissing">Display only missing</label>
          <Navigation onClick={this.selectTab} currentTab={currentTab} />
        </header>
        <main onClick={this.recount} className={classes}>
          {boxes.map((pokemons, key) => <Box key={key} num={key + 1} pokemons={pokemons} />)}
        </main>
        <footer className="Footer">
          <div>Version 1.5.0</div>
          <div>{pokemonCaught}/{max}</div>
        </footer>
      </div>
    )
  }
}
