import { SCREENS } from 'constants.js'
import ListItem from 'components/ListItem.jsx'
import { list, translated } from 'styles/list.module.css'

export default function List({ currentScreen, onClick, pokemons }) {
  return (
    <div className={`${list} ${currentScreen === SCREENS.LIST ? '' : translated}`} onClick={onClick}>
      {
        pokemons.map(({ numero, name, localization }) => {
          return <ListItem key={numero} numero={numero} name={name} localization={localization} />
        })
      }
    </div>
  )
}
