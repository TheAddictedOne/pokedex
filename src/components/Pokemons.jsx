import { Component } from 'react'

class Pokemons extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  toggle({ currentTarget }) {
    const name = currentTarget.dataset.name
    const isCaught = localStorage.getItem(name)

    if (isCaught) {
      localStorage.removeItem(name)
      currentTarget.classList.remove('caught')
    }
    else {
      localStorage.setItem(name, true)
      currentTarget.classList.add('caught')
    }
    this.forceUpdate()
  }

  render() {
    return (
      <>
        <h2 className="Count">{localStorage.length}/{this.props.pokemons.length}</h2>
        <div className="Pokedex">
          {this.props.pokemons.map(
            (pokemon, key) => {
              const numInBox = key % 30
              let cssclasses = 'Pokemon'
              cssclasses += (numInBox >= 24 && numInBox < 30) ? ' margin-bottom' : ''
              cssclasses += localStorage.getItem(pokemon.name) ? ' caught' : ''
              return (
                <div key={key} className={cssclasses} onClick={this.toggle} data-name={pokemon.name}>
                  <img src={pokemon.src} />
                </div>
              )
            }
          )}
        </div>
      </>
    )
  }
}

export default Pokemons
