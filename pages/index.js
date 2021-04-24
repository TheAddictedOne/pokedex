import fs from 'fs'
import path from 'path'
import Header from 'components/Header.jsx'
import Screens from 'components/Screens.jsx'
import Footer from 'components/Footer.jsx'
import { pokedex } from 'styles/pokedex.module.css'
import { URLS } from 'constants.js'

export async function getStaticProps() {
  let galar = JSON.parse(fs.readFileSync(path.join(process.cwd(), URLS.GALAR)))
  let isolarmure = JSON.parse(fs.readFileSync(path.join(process.cwd(), URLS.ISOLARMURE)))
  let couronneige = JSON.parse(fs.readFileSync(path.join(process.cwd(), URLS.COURONNEIGE)))

  return {
    props: {
      data: { galar, isolarmure, couronneige }
    }
  }
}

export default function Pokedex({ data }) {
  return (
    <div className={pokedex}>
      <Header />
      <Screens data={data} />
      <Footer />
    </div>
  )
}
