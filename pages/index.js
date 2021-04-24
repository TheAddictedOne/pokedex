import Header from 'components/Header.jsx'
import Screens from 'components/Screens.jsx'
import Footer from 'components/Footer.jsx'
import { pokedex } from 'styles/pokedex.module.css'

export default function Pokedex() {
  return (
    <div className={pokedex}>
      <Header />
      <Screens />
      <Footer />
    </div>
  )
}
