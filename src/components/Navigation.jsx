import { Component } from 'react'
import Pokemon from 'src/components/Pokemon.jsx'

const TAB_GALAR = 'galar'
const TAB_ISOLARMURE = 'isolarmure'
const TAB_COURONNEIGE = 'courroneige'

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.selectTab = this.selectTab.bind(this)

    this.state = {
      tab: TAB_GALAR
    }
  }

  selectTab(event) {
    this.setState({ tab: event.target.dataset.tab })
  }

  render() {
    const { tab } = this.state

    return (
      <nav className="Navigation" onClick={this.selectTab}>
        <div className={tab === TAB_GALAR ? 'selected' : ''} data-tab={TAB_GALAR}>Galar</div>
        <div className={tab === TAB_ISOLARMURE ? 'selected' : ''} data-tab={TAB_ISOLARMURE}>Isolarmure</div>
        <div className={tab === TAB_COURONNEIGE ? 'selected' : ''} data-tab={TAB_COURONNEIGE}>Courroneige</div>
      </nav>
    )
  }
}

export default Navigation
