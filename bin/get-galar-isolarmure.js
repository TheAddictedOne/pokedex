const fsp = require('fs').promises
const path = require('path')
const request = require('request')
const { JSDOM } = require('jsdom')
const { clean, getTypes } = require('./utils.js')

const isVerbose = process.argv.includes('--verbose')

const DEST = path.resolve(__dirname, '../data/galar-isolarmure.json')
const URL = 'https://www.pokepedia.fr/Liste_des_Pok%C3%A9mon_dans_l%27ordre_du_Pok%C3%A9dex_d%27Isolarmure'

request({ method: 'GET', url: URL }, (err, res, body) => {
  const pokemons = []
  const doc = (new JSDOM(body)).window.document
  const tables = doc.querySelectorAll('table.tableaustandard')

  console.log(`${tables.row} tables found`)

  tables.forEach((table) => {
    const rows = table.querySelectorAll('tbody tr')

    console.log(`${rows.length} rows found`)

    rows.forEach((row, i) => {
      const columns = row.querySelectorAll('td')

      if (!columns[0] || !columns[2] || !columns[6]) {
        console.log(`  Row ${i} skipped`)
        return
      }

      const numero = clean(columns[0].textContent)
      const name = clean(columns[2].textContent)
      const types = getTypes(columns[6])

      pokemons.push({ numero, name, types })
      console.log(` Row ${i}: ${numero} - ${name} - ${types.map((t) => t)}`)
    })
  })

  console.log(`${pokemons.length} pokemons registered`)

  if (isVerbose) {
    console.log('Verbose mode on: file not written.')
    return
  }

  fsp.writeFile(DEST, JSON.stringify(pokemons))
    .then(() => console.log(`Succeed! File written at ${DEST}`))
    .catch((e) => console.log('Failed :(', e))
})
