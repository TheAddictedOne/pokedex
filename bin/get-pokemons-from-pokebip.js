const fsp = require('fs').promises
const path = require('path')
const request = require('request')
const { JSDOM } = require('jsdom')

const DEST = path.resolve(__dirname, '../data/pokemons.json')
const URL = 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/pokedex-galar'

request({ method: 'GET', url: URL }, (err, res, body) => {
  const names = []
  const doc = (new JSDOM(body)).window.document
  const tables = doc.querySelectorAll('table')
  const table = tables[1]
  const rows = table.querySelectorAll('tbody tr')

  rows.forEach((row, i) => {
    const columns = row.querySelectorAll('td')
    names.push(columns[2].textContent)
  })

  fsp.writeFile(DEST, JSON.stringify(names))
    .then(() => console.log('Succeed!'))
    .catch((e) => console.log('Failed :(', e))
})
