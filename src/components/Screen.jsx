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
    this.state = {
      screen: SCREEN_REGIONS,
      pokemons: []
    }
  }

  _fetchPokemons(url) {
    return
    fetch(url).then((response) => response.json()).then((pokemons) => {
      this.setState({ screen: SCREEN_LIST, pokemons })
    })
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
        {
          this.state.screen === SCREEN_REGIONS
            ? (
              <div className="Regions">
                <Region name="Galar" count="400" total="400" onClick={() => this._fetchPokemons(URL_GALAR)} />
                <Region name="Isolarmure" count="210" total="210" onClick={() => this._fetchPokemons(URL_ISOLARMURE)} />
                <Region name="Courroneige" count="123" total="210" onClick={() => this._fetchPokemons(URL_COURRONEIGE)} />
              </div>
            )
            : (
              <List pokemons={this.state.pokemons} />
            )
          }
      </main>
    )
  }
}
