import { Component } from 'react'

class Pokemons extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  toggle(event) {
    event.currentTarget.classList.toggle('caught')
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
              return (
                <tr key={key} onClick={this.toggle}>
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
