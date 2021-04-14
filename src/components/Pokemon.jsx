import ListItem from 'src/components/ListItem.jsx'
import { getWeaknesses } from 'src/utils.js'

function Types({ types }) {
  if (!types) return null

  return (
    <div>
      {types.map((type, i) => <img key={i} src={`./images/types/${type}.png`} />)}
    </div>
  )
}

function Weaknesses({ types }) {
  if (!types) return null

  const weaknesses = getWeaknesses(types)

  return (
    <div>
      {weaknesses.map((weakness, i) => <img key={i} src={`./images/types/${weakness}.png`} />)}
    </div>
  )
}

export default function Pokemon({ translated, pokemon }) {
  return (
    <div className={`Pokemon ${translated ? 'translated' : ''}`}>
      <ListItem numero={pokemon.numero} name={pokemon.name} />
      <img src={`./images/${pokemon.name}.png`} />
      <main>
        <section>
          <h1>Types</h1>
          <Types types={pokemon.types} />
        </section>
        <section>
          <h1>Weak</h1>
          <Weaknesses types={pokemon.types} />
        </section>
        {/* <section>
          <h1>Where</h1>
          <div>{pokemon.localization}</div>
        </section> */}
        {/* <section>
          <h1>When</h1>
          <div>
            <img src={`./images/weathers/clear.png`} />
            <img src={`./images/weathers/cloudy.png`} />
            <img src={`./images/weathers/fog.png`} />
            <img src={`./images/weathers/rain.png`} />
            <img src={`./images/weathers/sandstorm.png`} />
            <img src={`./images/weathers/snow.png`} />
            <img src={`./images/weathers/snowstorm.png`} />
            <img src={`./images/weathers/sunny.png`} />
            <img src={`./images/weathers/thunderstorm.png`} />
          </div>
        </section> */}
      </main>
    </div>
  )
}
