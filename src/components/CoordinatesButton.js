import React from "react";

export default class CoordinatesButton extends React.Component {
  showCoords = (event) =>
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);

  render() {
    return <button onClick={this.showCoords}>Coordinates Button</button>;
  }
}
