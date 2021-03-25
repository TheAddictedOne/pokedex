import { Component } from 'react'

class Pokemons extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.setClassName = this.setClassName.bind(this)
  }

  toggle(event) {
    console.log(localStorage.length)
    localStorage.setItem(event.currentTarget.dataset.key, true)
    event.currentTarget.classList.toggle('caught')
  }

  setClassName(key) {
    return localStorage.getItem(key) ? 'caught': ''
  }

  render() {
    return (
      <div className="Pokedex">
        {this.props.pokemons.map(
          (pokemon, key) => {
            const numInBox = key % 30
            const className = (numInBox >= 24 && numInBox < 30) ? 'Pokemon margin-bottom' : 'Pokemon'
            return (
              <div key={key} className={className} onClick={this.toggle}>
                <img src={pokemon.src} />
              </div>
            )
          }
        )}
      </div>
    )
  }
}

export default Pokemons
