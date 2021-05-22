import React from "react";
import "./App.css";
import { MainComponent } from "./MainComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContainter: false,
      counter: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState((state) => ({
              showContainter: !state.showContainter,
            }))
          }
        >
          Жми меня
        </button>
        <div>
          <button
            onClick={() =>
              this.setState((state) => ({
                counter: state.counter - 1,
              }))
            }
          >
            -
          </button>
          <strong>{this.state.counter}</strong>
          <button
            onClick={() =>
              this.setState((state) => ({
                counter: state.counter + 1,
              }))
            }
          >
            +
          </button>
        </div>
        {this.state.showContainter &&
          React.createElement(MainComponent, { showMe: true, counter: this.state.counter })}
      </div>
    );
  }
}

export default App;
