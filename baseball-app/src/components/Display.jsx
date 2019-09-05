import React from "react";

export default class Display extends React.Component {
  render() {
    return (
      <div className="Display">
        <h2>{this.props.score}</h2>
      </div>
    );
  }
}
