const fsp = require('fs').promises
const path = require('path')
const request = require('request')
const { JSDOM } = require('jsdom')

const DEST = path.resolve(__dirname, '../data/pokemons.json')
const URL = 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/pokedex-galar'

request({ method: 'GET', url: URL }, (err, res, body) => {
  const pokemons = []
  const doc = (new JSDOM(body)).window.document

  const tables = doc.querySelectorAll('table')

  const table = tables[1]

  const rows = table.querySelectorAll('tbody tr')

  rows.forEach((row, i) => {
    const columns = row.querySelectorAll('td')
    const src = 'https://www.pokebip.com' + columns[1].querySelector('img').src
    const name = columns[2].textContent
    const pokemon = { src, name }
    pokemons.push(pokemon)
  })
  console.log(pokemons)

  fsp.writeFile(DEST, JSON.stringify(pokemons))
    .then(() => console.log('Succeed!'))
    .catch((e) => console.log('Failed :(', e))
})
