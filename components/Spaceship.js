import React from 'react'

class Spaceship extends React.Component {
  render() {
    let rocketString
    if(this.props.hasRockets) {
      rocketString = 'installed'
    } else {
      rocketString = 'none installed'
    }

    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Stats:</p>
        <ul>
          <li><strong>Top-Speed:</strong> {this.props.speed} L/T</li>
          <li><strong>Rockets:</strong> {rocketString}</li>
          <li><strong>Colors:</strong> {this.props.colors.join(', ')}</li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
