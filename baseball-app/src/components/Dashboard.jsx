import React from "react";
import { FaBaseballBall, FaWindowClose, FaCheck } from "react-icons/fa";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <button onClick={this.props.hitHandler}>Hit</button>
        <button>Strike</button>
        <button>Foul </button>
      </div>
    );
  }
}
