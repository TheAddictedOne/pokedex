const https = require('https')
const fs = require('fs')
const path = require('path')

const SRC_FILE = path.resolve(__dirname, '../data/pokemon-names.json')
const SRC = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

fs.promises.readFile(SRC_FILE).then((json) => {
  const names = JSON.parse(json)

  names.forEach((name, i) => {
    const n = String(i+1).padStart(3, "0")
    const file = fs.createWriteStream(path.resolve(__dirname, `../images/${name}.png`));
    const request = https.get(`${SRC}${n}.png`, function(response) {
      response.pipe(file);
    });
  })
})
