import React from "react";
import { FaBaseballBall, FaWindowClose, FaCheck } from "react-icons/fa";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <button data-testid="ball-button" onClick={this.props.ballsHandler}>
          Ball
        </button>
        <button data-testid="hit-button" onClick={this.props.hitsHandler}>
          Hit
        </button>
        <button data-testid="strike-button" onClick={this.props.strikesHandler}>
          Strike
        </button>
        <button data-testid="foul-button" onClick={this.props.foulHandler}>
          Foul
        </button>
      </div>
    );
  }
}
