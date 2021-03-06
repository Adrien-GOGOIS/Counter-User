import React from "react";
import "./Counter.css";

// Component du 1er compteur avec onClick
class Counter extends React.Component {
  render() {
    return (
      <div className="container">
        <button onClick={this.props.substract}>-</button>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
