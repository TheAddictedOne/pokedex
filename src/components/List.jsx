import ListItem from 'src/components/ListItem.jsx'

export default function List({ translated, pokemons, onClick, onBack }) {
  return (
    <div className={`List ${translated ? 'translated' : ''}`} onClick={onClick}>
      {
        pokemons.map(({ numero, name, localization }) => {
          return <ListItem key={numero} numero={numero} name={name} localization={localization} />
        })
      }
      <div className="BackButton" onClick={onBack}>Back</div>
    </div>
  )
}
