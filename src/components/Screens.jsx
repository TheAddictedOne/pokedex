import { Component } from 'react'
import { SCREENS, URLS } from 'src/constants.js'
import BackgroundIcon from 'src/components/BackgroundIcon.jsx'
import Regions from 'src/components/Regions.jsx'
import List from 'src/components/List.jsx'
import Pokemon from 'src/components/Pokemon.jsx'

export default class Screens extends Component {
  constructor(props) {
    super(props)
    this._fetchPokemons = this._fetchPokemons.bind(this)
    this._displayPokemon = this._displayPokemon.bind(this)
    this._onBack = this._onBack.bind(this)
    this.state = {
      regionHandlers: {
        galar: () => this._fetchPokemons(URLS.GALAR),
        isolarmure: () => this._fetchPokemons(URLS.ISOLARMURE),
        couronneige: () => this._fetchPokemons(URLS.COURONNEIGE),
      },
      listHandlers: {
        clickOnPokemon: this._displayPokemon,
        clickOnBack: this._onBack
      },
      screen: SCREENS.REGIONS,
      pokemons: [],
      pokemon: {}
    }
  }

  _fetchPokemons(url) {
    fetch(url).then((response) => response.json()).then((pokemons) => {
      this.setState({ screen: SCREENS.LIST, pokemons })
    })
  }

  _displayPokemon(event) {
    const selected = this.state.pokemons.find((pokemon) => pokemon.numero === event.target.dataset.numero)

    this.setState({
      screen: SCREENS.POKEMON,
      pokemon: selected
    })
  }

  _onBack() {
    this.setState({ screen: SCREENS.REGIONS })
  }

  render() {
    return (
      <main className="Screens">
        <BackgroundIcon />
        <Regions currentScreen={this.state.screen} handlers={this.state.regionHandlers} />
        <List currentScreen={this.state.screen} handlers={this.state.listHandlers} pokemons={this.state.pokemons} />
        <Pokemon currentScreen={this.state.screen} pokemon={this.state.pokemon} />
      </main>
    )
  }
}
