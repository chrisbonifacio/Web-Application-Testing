import React from "react";
import "./App.scss";

// Components
import Dashboard from "./components/Dashboard";
import Display from "./components/Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    // State
    this.state = {
      score: 0,
      balls: 0,
      strikes: 0,
      hit: false
    };
  }

  // Handlers
  hitHandler = () => {
    this.setState({ hit: true });
    console.log(this.state.hit);
  };

  render() {
    return (
      <div className="App">
        <Display score={this.state.score} />
        <Dashboard hitHandler={this.hitHandler} />
      </div>
    );
  }
}

export default App;
