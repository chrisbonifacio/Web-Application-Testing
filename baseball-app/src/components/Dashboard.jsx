import React from "react";
import { FaBaseballBall, FaWindowClose, FaCheck } from "react-icons/fa";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <button onClick={this.props.ballHandler}>Ball</button>
        <button onClick={this.props.hitHandler}>Hit</button>
        <button onClick={this.props.strikeHandler}>Strike</button>
        <button onClick={this.props.foulHandler}>Foul</button>
      </div>
    );
  }
}
