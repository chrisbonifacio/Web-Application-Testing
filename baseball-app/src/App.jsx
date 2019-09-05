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
      strikes: 0
    };
  }

  // Handlers
  hitHandler = e => {
    e.preventDefault();
    this.setState({
      balls: 0
    });
  };

  foulHandler = e => {
    e.preventDefault();
    this.setState({
      balls: 0
    });
  };

  ballHandler = e => {
    e.preventDefault();
    this.setState({
      balls: this.state.balls + 1
    });
  };

  strikeHandler = e => {
    e.preventDefault();
    this.state.strikes < 3
      ? this.setState({
          strikes: this.state.strikes + 1
        })
      : this.setState({ strikes: 0 });
  };

  render() {
    return (
      <div className="App">
        <Display score={this.state.score} strikes={this.state.strikes} />
        <Dashboard
          hitHandler={this.hitHandler}
          ballHandler={this.ballHandler}
          strikeHandler={this.strikeHandler}
          foulHandler={this.foulHandler}
        />
      </div>
    );
  }
}

export default App;
