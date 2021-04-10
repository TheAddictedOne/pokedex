import { Component } from 'react'
import Screen from 'src/components/Screen.jsx'
import Box from 'src/components/Box.jsx'
import Navigation from 'src/components/Navigation.jsx'
import List from 'src/components/List.jsx'
import Pokemon from 'src/components/Pokemon.jsx'
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

    return (
      <div className="Pokedex">
        <header>
          <div className="anchor top-left">
            <div className="Corner"></div>
            <div className="Corner large"></div>
          </div>
          <div className="anchor top-right">
            <div className="Corner"></div>
            <div className="Corner large"></div>
          </div>
          <div className="Pokeball">
            <div></div>
            <main></main>
            <div></div>
          </div>
        </header>
        <Screen />
        <footer>
          <div className="anchor bottom-left">
            <div className="Corner"></div>
            <div className="Corner large"></div>
          </div>
          <div className="anchor bottom-right">
            <div className="Corner"></div>
            <div className="Corner large"></div>
          </div>
        </footer>
      </div>
    )
  }
}
