import React from "react";

export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Display">
        <h2>{this.props.score}</h2>
        <h3>{this.props.balls}</h3>
        <h3>{this.props.strikes}</h3>
      </div>
    );
  }
}
