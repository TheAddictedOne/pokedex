import ListItem from 'src/components/ListItem.jsx'

export default function({ numero, name, src, type1, type2 }) {
  return (
    <div className="Pokemon">
      <ListItem numero={numero} name={name} />
      <img src={src} />
      <main>
        <section>
          <h1>Types</h1>
          <div>
            <img src={`./images/types/${type1}.png`} />
            <img src={`./images/types/${type2}.png`} />
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
          <div>Route 102</div>
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
