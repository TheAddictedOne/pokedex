const fsp = require('fs').promises
const path = require('path')
const request = require('request')
const { JSDOM } = require('jsdom')

const DEST = path.resolve(__dirname, '../data/galar-isolarmure.json')
const URL = 'https://www.jeuxvideo.com/wikis-soluce-astuces/1247746/liste-des-211-pokemon-du-dlc-isolarmure.htm'

request({ method: 'GET', url: URL }, (err, res, body) => {
  const names = []
  const doc = (new JSDOM(body)).window.document

  const table = doc.querySelector('table')

  const rows = table.querySelectorAll('tbody tr')

  rows.forEach((row, i) => {
    const columns = row.querySelectorAll('td')
    names.push(columns[2].textContent)
  })

  fsp.writeFile(DEST, JSON.stringify(names))
    .then(() => console.log('Succeed!'))
    .catch((e) => console.log('Failed :(', e))
})
