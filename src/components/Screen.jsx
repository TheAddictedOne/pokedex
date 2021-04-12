import { Component } from 'react'
import Region from 'src/components/Region.jsx'
import List from 'src/components/List.jsx'

const SCREEN_REGIONS = 'regions'
const SCREEN_LIST = 'list'

const URL_GALAR = './data/galar.json'
const URL_ISOLARMURE = './data/galar-isolarmure.json'
const URL_COURRONEIGE = './data/galar-courroneige.json'

export default class Screen extends Component {
  constructor(props) {
    super(props)
    this._fetchPokemons = this._fetchPokemons.bind(this)
    this._onBack = this._onBack.bind(this)
    this.state = {
      screen: SCREEN_REGIONS,
      pokemons: []
    }
  }

  _fetchPokemons(url) {
    fetch(url).then((response) => response.json()).then((pokemons) => {
      this.setState({ screen: SCREEN_LIST, pokemons })
    })
  }

  _onBack() {
    this.setState({ screen: SCREEN_REGIONS })
  }

  render() {
    return (
      <main className="Screen">
        <div className="Icon">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`Regions ${this.state.screen === SCREEN_REGIONS ? '' : 'translate'}`}>
          <Region name="Galar" count="400" total="400" onClick={() => this._fetchPokemons(URL_GALAR)} />
          <Region name="Isolarmure" count="210" total="210" onClick={() => this._fetchPokemons(URL_ISOLARMURE)} />
          <Region name="Courroneige" count="123" total="210" onClick={() => this._fetchPokemons(URL_COURRONEIGE)} />
        </div>
        <List translated={this.state.screen === SCREEN_REGIONS} pokemons={this.state.pokemons} onBack={this._onBack} />
      </main>
    )
  }
}
