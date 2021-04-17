import { SCREENS } from 'src/constants.js'
import ListItem from 'src/components/ListItem.jsx'
import { getAffinities } from 'src/utils.js'

function Types({ types }) {
  if (!types) return null

  return (
    <div>
      {types.map((type, i) => <img key={i} src={`./images/types/${type}.png`} />)}
    </div>
  )
}

function Affinities({ affinities }) {
  return Object.keys(affinities).map((name, key) => {
    return (
      <section key={key}>
        <h1>{name}</h1>
        <div>
          {affinities[name].map((type, i) => <img key={i} src={`./images/types/${type}.png`} />)}
        </div>
      </section>
    )
  })
}

export default function Pokemon({ currentScreen, pokemon }) {
  if (!pokemon.types) return null

  return (
    <div className={`Pokemon ${currentScreen === SCREENS.POKEMON ? '' : 'translated'}`}>
      <ListItem numero={pokemon.numero} name={pokemon.name} />
      <img src={`./images/${pokemon.name}.png`} />
      <main>
        <section>
          <h1>Types</h1>
          <Types types={pokemon.types} />
        </section>
        <Affinities affinities={getAffinities(pokemon.types)} />
      </main>
    </div>
  )
}
