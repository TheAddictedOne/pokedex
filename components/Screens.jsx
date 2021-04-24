import { Component } from 'react'
import { SCREENS, URLS } from 'constants.js'
import BackButton from 'components/BackButton.jsx'
import BackgroundIcon from 'components/BackgroundIcon.jsx'
import Regions from 'components/Regions.jsx'
import List from 'components/List.jsx'
import Pokemon from 'components/Pokemon.jsx'
import { screens } from 'styles/screens.module.css'

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
    this.setState({ screen: this.state.screen === SCREENS.POKEMON ? SCREENS.LIST : SCREENS.REGIONS })
  }

  render() {
    return (
      <main className={screens}>
        <BackgroundIcon />
        <Regions currentScreen={this.state.screen} handlers={this.state.regionHandlers} />
        <List currentScreen={this.state.screen} onClick={this._displayPokemon} pokemons={this.state.pokemons} />
        <Pokemon currentScreen={this.state.screen} pokemon={this.state.pokemon} />
        {this.state.screen !== SCREENS.REGIONS ? <BackButton onClick={this._onBack} /> : null}
      </main>
    )
  }
}
