import ListItem from 'src/components/ListItem.jsx'

export default function Pokemon({ translated, pokemon }) {
  return (
    <div className={`Pokemon ${translated ? 'translated' : ''}`}>
      <ListItem numero={pokemon.numero} name={pokemon.name} />
      <img src={pokemon.src} />
      <main>
        <section>
          <h1>Types</h1>
          <div>
            <img src={`./images/types/${pokemon.type1}.png`} />
            <img src={`./images/types/${pokemon.type2}.png`} />
          </div>
        </section>
        <section>
          <h1>Weak</h1>
          <div>
            <img src={`./images/types/ground.png`} />
            <img src={`./images/types/fire.png`} />
          </div>
        </section>
        <section>
          <h1>Where</h1>
          <div>{pokemon.localization}</div>
        </section>
        <section>
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
        </section>
      </main>
    </div>
  )
}
