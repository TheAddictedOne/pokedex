import Tab from 'src/components/Tab.jsx'

const TAB_GALAR = 'Galar'
const TAB_ISOLARMURE = 'Isolarmure'
const TAB_COURONNEIGE = 'Courroneige'

const URL_GALAR = './data/pokemons.json'
const URL_ISOLARMURE = './data/galar-isolarmure.json'

export default function({ onClick, currentTab }) {
  return (
    <nav onClick={onClick}>
      <Tab currentTab={currentTab} tab={TAB_GALAR} src={URL_GALAR} />
      <Tab currentTab={currentTab} tab={TAB_ISOLARMURE} src={URL_ISOLARMURE} />
      <Tab currentTab={currentTab} tab={TAB_COURONNEIGE} />
      <span className="current"></span>
    </nav>
  )
}
