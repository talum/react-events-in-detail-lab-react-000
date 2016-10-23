const React = require('react');

class CoordinatesButton extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}

module.exports = CoordinatesButton;
