import { SCREENS } from 'src/constants.js'
import ListItem from 'src/components/ListItem.jsx'

export default function List({ currentScreen, onClick, pokemons }) {
  return (
    <div className={`List ${currentScreen === SCREENS.LIST ? '' : 'translated'}`} onClick={onClick}>
      {
        pokemons.map(({ numero, name, localization }) => {
          return <ListItem key={numero} numero={numero} name={name} localization={localization} />
        })
      }
    </div>
  )
}
