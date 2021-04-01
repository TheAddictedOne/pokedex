const fsp = require('fs').promises
const path = require('path')
const request = require('request')
const { JSDOM } = require('jsdom')

const DEST = path.resolve(__dirname, '../data/pokemon-names.json')
const URL = 'https://fr.wikipedia.org/wiki/Liste_des_Pok%C3%A9mon'

request({ method: 'GET', url: URL }, (err, res, body) => {
  const names = []
  const doc = (new JSDOM(body)).window.document
  const gens = doc.querySelectorAll('.colonnes')

  gens.forEach((gen) => {
    const rows = gen.querySelectorAll('li')

    rows.forEach((row) => {
      const a = row.querySelector('a')
      names.push(a.textContent)
    })
  })

  fsp.writeFile(DEST, JSON.stringify(names))
    .then(() => console.log('Succeed!'))
    .catch((e) => console.log('Failed :(', e))
})
