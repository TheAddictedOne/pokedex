import Tab from 'src/components/Tab.jsx'

const TAB_GALAR = 'Galar'
const TAB_ISOLARMURE = 'Isolarmure'
const TAB_COURONNEIGE = 'Courroneige'

export default function({ onClick, currentTab }) {
  return (
    <nav className="Navigation" onClick={onClick}>
      <Tab currentTab={currentTab} tab={TAB_GALAR} />
      <Tab currentTab={currentTab} tab={TAB_ISOLARMURE} />
      <Tab currentTab={currentTab} tab={TAB_COURONNEIGE} />
    </nav>
  )
}
