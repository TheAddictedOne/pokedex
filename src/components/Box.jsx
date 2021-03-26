import { Component } from 'react'
import Pokemon from 'src/components/Pokemon.jsx'

class Box extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  toggle(event) {
    if (event.target.tagName !== 'H1') return
    const pokemons = event.currentTarget.querySelector('.Pokemons')
    pokemons.classList.toggle('hidden')
  }

  render() {
    const { num, pokemons } = this.props
    return (
      <section className="Box" onClick={this.toggle}>
        <h1>Boîte n°{num}</h1>
        <div className="Pokemons">
          {pokemons.map((pokemon, key) => <Pokemon key={key} {...pokemon} />)}
        </div>
      </section>
    )
  }
}

export default Box
