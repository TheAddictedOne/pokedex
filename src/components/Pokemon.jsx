import { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
  }

  toggle({ currentTarget }) {
    const name = currentTarget.dataset.name
    const isCaught = localStorage.getItem(name)

    if (isCaught) {
      localStorage.removeItem(name)
      currentTarget.classList.remove('caught')
    }
    else {
      localStorage.setItem(name, true)
      currentTarget.classList.add('caught')
    }
  }

  render() {
    let cssclasses = 'Pokemon'
    cssclasses += localStorage.getItem(name) ? ' caught' : ''

    return (
      <div className={cssclasses} onClick={this.toggle} data-name={this.props.pokemon}>
        <img src={`./images/${this.props.pokemon}.png`} />
      </div>
    )
  }
}

export default Pokemon
