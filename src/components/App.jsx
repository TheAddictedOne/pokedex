import { Component } from 'react'
import Box from 'src/components/Box.jsx'
import Navigation from 'src/components/Navigation.jsx'
import { getBoxes } from 'src/utils.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.selectTab = this.selectTab.bind(this)
    this.refreshCounter = this.refreshCounter.bind(this)

    this.state = {
      currentTab: null,
      boxes: [],
      max: '-'
    }
  }

  selectTab(event) {
    const { tab: currentTab, src } = event.target.dataset
    this.setState({ boxes: [], currentTab })
    getBoxes(src).then(({ boxes, max }) => {
      this.setState({ boxes, max })
    })
  }

  refreshCounter() {
    this.forceUpdate()
  }

  render() {
    const { currentTab, boxes, max } = this.state

    return (
      <div className="App" onClick={this.refreshCounter}>
        <header className="Header">
          <div className="title">
            <img src="./images/pokeball.png" />
            <h1>Pokedex!</h1>
          </div>
          <Navigation onClick={this.selectTab} currentTab={currentTab} />
        </header>
        <main>
          {boxes.map((pokemons, key) => <Box key={key} num={key + 1} pokemons={pokemons} />)}
        </main>
        <footer className="Footer">
          <div>Version 1.2.0</div>
          <div>{localStorage.length}/{max}</div>
        </footer>
      </div>
    )
  }
}

export default App
