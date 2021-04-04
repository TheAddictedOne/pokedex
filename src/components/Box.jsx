import { Component } from 'react'
import Pokemon from 'src/components/Pokemon.jsx'

class Box extends Component {
  constructor(props) {
    super(props)

    this.countCurrent = this.countCurrent.bind(this)
    this.toggle = this.toggle.bind(this)

    this.state = {
      current: 0,
    }
  }

  countCurrent() {
    let i = 0
    const { pokemons } = this.props

    pokemons.forEach((name) => {
      if (localStorage.getItem(name)) {
        i++
      }
    })

    return i
  }

  toggle(event) {
    if (event.target.tagName === 'H1') {
      event.currentTarget.classList.toggle('hidden')
    }
    this.setState({ current: this.countCurrent() })
  }

  componentDidMount() {
    this.setState({ current: this.countCurrent() })
  }

  render() {
    const { num, pokemons } = this.props
    const { current } = this.state
    return (
      <section className="Box hidden" onClick={this.toggle}>
        <h1>Boîte n°{num} ({current}/30)</h1>
        <div className="Pokemons">
          {pokemons.map((name, key) => <Pokemon key={key} name={name} />)}
        </div>
      </section>
    )
  }
}

export default Box
