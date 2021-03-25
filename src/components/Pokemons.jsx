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
      <table className={this.props.mode ? 'only-caught' : ''}>
        <thead>
          <tr>
            <th>N°</th>
            <th>Image</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {this.props.pokemons.map(
            (pokemon, key) => {
              key++;
              const className = this.setClassName(key)
              return (
                <tr key={key} onClick={this.toggle} data-key={key} className={className}>
                  <td>{key}</td>
                  <td><img src={pokemon.src} /></td>
                  <td>{pokemon.name}</td>

                </tr>
              )
            }
          )}
        </tbody>
      </table>
    )
  }
}

export default Pokemons
