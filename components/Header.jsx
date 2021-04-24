import Corner from 'components/Corner.jsx'
import Pokeball from 'components/Pokeball.jsx'

export default function Header() {
  return (
    <header>
      <Corner position={'top-left'} />
      <Corner position={'top-right'} />
      <Pokeball />
    </header>
  )
}
