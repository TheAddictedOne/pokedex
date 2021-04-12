const fsp = require('fs').promises
const path = require('path')
const request = require('request')
const { JSDOM } = require('jsdom')

const DEST = path.resolve(__dirname, '../data/galar.json')
const URL = 'https://www.pokebip.com/page/jeuxvideo/pokemon-epee-bouclier/pokedex-galar'

function clean(str) {
  return str.replace(/^\s+|\s+$/g, '')
}

request({ method: 'GET', url: URL }, (err, res, body) => {
  const names = []
  const doc = (new JSDOM(body)).window.document
  const table = doc.querySelector('table.bipcode')
  const rows = table.querySelectorAll('tbody tr')

  console.log(`${rows.length} found`)

  rows.forEach((row, i) => {
    const columns = row.querySelectorAll('td')

    if (!columns[0] || !columns[3] || !columns[4]) {
      console.log(`Row ${i} skipped`)
      return
    }

    const numero = clean(columns[0].textContent)
    const name = clean(columns[3].textContent)
    const localization = clean(columns[4].textContent)

    names.push({ numero, name, localization })
    console.log(`Row ${i}: ${numero} - ${name} - ${localization}`)
  })

  fsp.writeFile(DEST, JSON.stringify(names))
    .then(() => console.log('Succeed!'))
    .catch((e) => console.log('Failed :(', e))
})
