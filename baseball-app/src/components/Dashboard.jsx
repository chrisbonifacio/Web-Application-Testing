import React from "react";
import { FaBaseballBall, FaWindowClose, FaCheck } from "react-icons/fa";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <button onClick={this.props.ballsHandler}>Ball</button>
        <button onClick={this.props.hitsHandler}>Hit</button>
        <button onClick={this.props.strikesHandler}>Strike</button>
        <button onClick={this.props.foulHandler}>Foul</button>
      </div>
    );
  }
}
