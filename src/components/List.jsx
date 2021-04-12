import ListItem from 'src/components/ListItem.jsx'

export default function List({ translated, pokemons }) {
  return (
    <div className={`List ${translated ? 'translated' : ''}`}>
      {
        pokemons.map(({ numero, name, localization }) => {
          return <ListItem key={numero} numero={numero} name={name} localization={localization} />
        })
      }
    </div>
  )
}
