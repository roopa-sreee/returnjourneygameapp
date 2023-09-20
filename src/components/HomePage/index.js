import React, { Component } from "react";
import Header from "../Header";
import LevelButton from "../LevelButton";

import "./index.css";

const gameLevels = [
  {
    id: "easy",
    value: "EASY",
    clicks: 10,
  },
  {
    id: "medium",
    value: "MEDIUM",
    clicks: 15,
  },
  {
    id: "hard",
    value: "HARD",
    clicks: 25,
  },
];

class HomePage extends Component {
  state = {
    activeLevelId: gameLevels[0].id,
    isGameStarted: false,
    color: "green",
    count: 40,
    clickCount: 0,
    clicksNeeded: 10,
  };

  onClickLevelButton = (id, clicks) => {
    this.setState({ activeLevelId: id });
    this.setState({ clicksNeeded: clicks });
  };

  onClickStart = () => {
    this.setState({ isGameStarted: true });
    let { count, color, clickCount, clicksNeeded } = this.state;
    let intervalId = setInterval(() => {
      if (count > 0) {
        if (color === "green") {
          this.setState({ color: "red" });
        } else {
          this.setState({ color: "green" });
        }
      } else if (count === 0) {
        clearInterval(intervalId);
        console.log("interval cleared");
        this.setState({ isGameStarted: false });
      } else if (clickCount === clicksNeeded) {
        clearInterval(intervalId);
        this.setState({ isGameStarted: false });
      }
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }, 1500);
  };

  onClickGameBox = () => {
    const { color, intervalId } = this.state;
    if (color === "green") {
      this.setState((prevState) => ({ clickCount: prevState.clickCount + 1 }));
    } else {
      clearInterval(intervalId);
      this.setState({ isGameStarted: false });
    }
  };
  componentDidMount() {
    const auth = localStorage.getItem("auth");
    const history = this.props;
    if (!auth) {
      history.replace("/login");
    }
  }

  render() {
    const {
      activeLevelId,
      isGameStarted,
      color,
      count,
      clickCount,
      clicksNeeded,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="home-container">
          <h1 className="welcome-heading">Welcome !! </h1>
          <ul className="game-level-buttons-list">
            {gameLevels.map((eachButton) => (
              <LevelButton
                key={eachButton.id}
                isActive={eachButton.id === activeLevelId}
                buttonDetails={eachButton}
                onClickLevelButton={this.onClickLevelButton}
              />
            ))}
          </ul>
          <button
            className="start-button"
            onClick={this.onClickStart}
            type="button"
          >
            Start
          </button>
          {isGameStarted ? (
            <div className="game-box-container">
              <h3>Score {clicksNeeded} to win in 40 seconds</h3>
              <div
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={this.onClickGameBox}
              >
                <h4>Click me!</h4>
              </div>
              <h3>{count} seconds left</h3>
              <h3>Your Score: {clickCount}</h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
