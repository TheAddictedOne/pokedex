import { Component } from 'react'
import Pokemon from 'src/components/Pokemon.jsx'

class Box extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  toggle(event) {
    if (event.target.tagName !== 'H1') return
    event.currentTarget.classList.toggle('hidden')
  }

  render() {
    const { num, pokemons } = this.props
    return (
      <section className="Box" onClick={this.toggle}>
        <h1>Boîte n°{num}</h1>
        <div className="Pokemons">
          {pokemons.map((name, key) => <Pokemon key={key} name={name} />)}
        </div>
      </section>
    )
  }
}

export default Box
