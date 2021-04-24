import { corner, large } from 'styles/corner.module.css'
import { anchor, topleft, topright, bottomleft, bottomright } from 'styles/layouts.module.css'

export default function Corner({ position }) {
  switch (position) {
    case 'top-left':
      position = topleft
      break
    case 'top-right':
      position = topright
      break
    case 'bottom-left':
      position = bottomleft
      break
    case 'bottom-right':
      position = bottomright
      break
  }

  return (
    <div className={`${anchor} ${position}`}>
      <div className={corner}></div>
      <div className={`${corner} ${large}`}></div>
    </div>
  )
}
