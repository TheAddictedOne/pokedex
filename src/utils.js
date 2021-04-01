export function getBoxes(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((pokemons) => {
      const POKEMONS_PER_BOX = 30
      const boxes = []
      let box
      pokemons.forEach((pokemon, i) => {
        if (i % 30 === 0) {
          box = []
          boxes.push(box)
        }
        box.push(pokemon)
      })
      return { boxes, max: pokemons.length }
    })
}
