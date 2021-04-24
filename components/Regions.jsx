import { SCREENS } from 'constants.js'
import { regions, translated } from 'styles/regions.module.css'

function Region({ name, count, total, onClick }) {
  return (
    <div className="Region" onClick={onClick}>
      <h1>{name}</h1>
      <span>{count} / {total}</span>
    </div>
  )
}


export default function Regions({ currentScreen, handlers }) {
  return (
    <div className={`${regions} ${currentScreen === SCREENS.REGIONS ? '' : translated}`}>
      <Region name="Galar" count="400" total="400" onClick={handlers.galar} />
      <Region name="Isolarmure" count="210" total="210" onClick={handlers.isolarmure} />
      <Region name="Couronneige" count="123" total="210" onClick={handlers.couronneige} />
    </div>
  )
}
