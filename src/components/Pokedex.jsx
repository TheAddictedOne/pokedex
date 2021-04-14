import { Component } from 'react'
import Screen from 'src/components/Screen.jsx'

export default class Pokedex extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Pokedex">
        <header>
          <div className="anchor top-left">
            <div className="Corner"></div>
            <div className="Corner large"></div>
          </div>
          <div className="anchor top-right">
            <div className="Corner"></div>
            <div className="Corner large"></div>
          </div>
          <div className="Pokeball">
            <div></div>
            <main></main>
            <div></div>
          </div>
        </header>
        <Screen />
        <footer>
          <div className="anchor bottom-left">
            <div className="Corner"></div>
            <div className="Corner large"></div>
          </div>
          <div className="anchor bottom-right">
            <div className="Corner"></div>
            <div className="Corner large"></div>
          </div>
        </footer>
      </div>
    )
  }
}
