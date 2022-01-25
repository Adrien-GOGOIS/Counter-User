import React from "react";
import "./Counter.css";

import Counter from "./Counter";

class CounterBis extends React.Component {
  constructor() {
    super();
    this.state = {
      countBis: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <button
          onClick={() => {
            if (this.state.countBis > 0) {
              this.setState({ countBis: this.state.countBis - 1 });
            }
          }}
        >
          {this.props.substract}
        </button>
        <h2>{this.state.countBis}</h2>
        <button
          onClick={() => {
            if (this.state.countBis < 100) {
              this.setState({ countBis: this.state.countBis + 1 });
            }
          }}
        >
          {this.props.increment}
        </button>
      </div>
    );
  }
}

export default CounterBis;
