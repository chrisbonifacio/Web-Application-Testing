import React from "react";

export default class Display extends React.Component {
  render() {
    return (
      <div className="Display">
        <h2>Balls: {this.props.balls}</h2>
        <h2>Strikes: {this.props.strikes}</h2>
        <h2>Fouls: {this.props.fouls}</h2>
      </div>
    );
  }
}
