import { SCREENS } from 'src/constants.js'
import ListItem from 'src/components/ListItem.jsx'

export default function List({ currentScreen, handlers, pokemons }) {
  return (
    <div className={`List ${currentScreen === SCREENS.LIST ? '' : 'translated'}`} onClick={handlers.clickOnPokemon}>
      {
        pokemons.map(({ numero, name, localization }) => {
          return <ListItem key={numero} numero={numero} name={name} localization={localization} />
        })
      }
      <div className="BackButton" onClick={handlers.clickOnBack}>Back</div>
    </div>
  )
}
