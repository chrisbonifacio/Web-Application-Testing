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
      fouls: 0,
      hits: 0
    };
  }

  // Handlers
  hitsHandler = e => {
    e.preventDefault();
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  foulHandler = e => {
    e.preventDefault();
    if (this.state.strikes >= 2) {
      this.setState({
        strikes: this.state.strikes + 0,
        fouls: this.state.fouls + 1
      });
    } else if (this.state.strikes >= 1 < 2) {
      this.setState({
        strikes: this.state.strikes + 1,
        fouls: this.state.fouls + 1
      });
    }
  };

  ballsHandler = e => {
    e.preventDefault();
    if (this.state.balls >= 4) {
      this.setState({
        balls: this.state.balls
      });
    } else {
      this.setState({
        balls: this.state.balls + 1
      });
    }
  };

  strikesHandler = e => {
    e.preventDefault();

    if (this.state.strikes >= 3) {
      this.setState({
        strikes: 0
      });
    } else {
      this.setState({
        strikes: this.state.strikes + 1
      });
    }
  };

  // Lifecycle Method
  componentDidUpdate() {
    if (this.state.strikes === 3 || this.state.balls === 4) {
      setTimeout(() => {
        this.setState({
          balls: 0,
          strikes: 0
        });
      }, 2000);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Container">
          <Display
            score={this.state.score}
            strikes={this.state.strikes}
            balls={this.state.balls}
            fouls={this.state.fouls}
          />
          <Dashboard
            hitsHandler={this.hitsHandler}
            ballsHandler={this.ballsHandler}
            strikesHandler={this.strikesHandler}
            foulHandler={this.foulHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
