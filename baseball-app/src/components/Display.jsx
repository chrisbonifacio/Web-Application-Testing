import React from "react";

export default class Display extends React.Component {
  render() {
    return (
      <div className="Display">
        <div className="stats">
          <h2 data-testid="ball-value">Balls: {this.props.balls}</h2>
          <h2 data-testid="strike-value">Strikes: {this.props.strikes}</h2>
          <h2 data-testid="foul-value">Fouls: {this.props.fouls}</h2>
        </div>
        <div className="notifications">
          {this.props.strikes >= 3 && <p>Strike 3, You're OUT!</p>}
          {this.props.balls >= 4 && <p>4 balls, walk to first base</p>}
        </div>
      </div>
    );
  }
}
