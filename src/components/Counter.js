import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            if (this.state.count > 0) {
              this.setState({ count: this.state.count - 1 });
            }
          }}
        >
          {this.props.substract}
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {this.props.increment}
        </button>
      </div>
    );
  }
}

export default Counter;
