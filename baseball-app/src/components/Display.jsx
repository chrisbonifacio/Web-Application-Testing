import React from "react";

export default class Display extends React.Component {
  render() {
    return (
      <div className="Display">
        <h2>Balls: {this.props.score}</h2>
        <h2>Strikes: {this.props.strikes}</h2>
      </div>
    );
  }
}
