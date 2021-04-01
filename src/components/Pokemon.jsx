import { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      isCaught: localStorage.getItem(props.name) ? true : false
    }
  }

  toggle({ currentTarget }) {
    if (this.state.isCaught) {
      localStorage.removeItem(this.props.name)
      this.setState({ isCaught: false })
    }
    else {
      localStorage.setItem(this.props.name, true)
      this.setState({ isCaught: true })
    }
  }

  render() {
    let cssclasses = 'Pokemon'
    cssclasses += localStorage.getItem(this.props.name) ? ' caught' : ''

    return (
      <div className={cssclasses} onClick={this.toggle}>
        <img src={`./images/${this.props.name}.png`} />
      </div>
    )
  }
}

export default Pokemon
