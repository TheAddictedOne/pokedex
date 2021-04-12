import ListItem from 'src/components/ListItem.jsx'

export default function List({ pokemons }) {
  return (
    <div className="List">
      {
        pokemons.map(({ numero, name, localization }) => {
          return <ListItem key={numero} numero={numero} name={name} localization={localization} />
        })
      }
    </div>
  )
}
