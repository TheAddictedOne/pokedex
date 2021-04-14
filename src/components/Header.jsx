import Corner from 'src/components/Corner.jsx'
import Pokeball from 'src/components/Pokeball.jsx'

export default function Header() {
  return (
    <header>
      <Corner position={'top-left'} />
      <Corner position={'top-right'} />
      <Pokeball />
    </header>
  )
}
