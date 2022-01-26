import React from "react";
import "./Counter.css";

// Component 2e compteur avec évènement onClick
class CounterBis extends React.Component {
  render() {
    return (
      <div className="container">
        <button onClick={this.props.substractBis}>-</button>
        <h2>{this.props.countBis}</h2>
        <button onClick={this.props.incrementBis}>+</button>
      </div>
    );
  }
}

export default CounterBis;
