import { Component } from 'react'
import Header from 'src/components/Header.jsx'
import Screens from 'src/components/Screens.jsx'
import Footer from 'src/components/Footer.jsx'

export default class Pokedex extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Pokedex">
        <Header />
        <Screens />
        <Footer />
      </div>
    )
  }
}
