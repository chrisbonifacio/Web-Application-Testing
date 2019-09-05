import React from "react";
import { FaBaseballBall } from "react-icons/fa";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Dashboard">
        <FaBaseballBall></FaBaseballBall>
        <span></span>
        <span></span>
      </div>
    );
  }
}
