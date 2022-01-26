import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import CounterBis from "./components/CounterBis";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      countBis: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter
          count={this.state.count}
          increment={() => {
            if (this.state.count < 100) {
              this.setState((prevState) => {
                return { count: prevState.count + 1 };
              });
            }
          }}
          substract={() => {
            if (this.state.count > 0) {
              this.setState((prevState) => {
                return { count: prevState.count - 1 };
              });
            }
          }}
        />
        <CounterBis
          countBis={this.state.countBis}
          incrementBis={() => {
            if (this.state.countBis < 100) {
              this.setState((prevState) => {
                return { countBis: prevState.countBis + 1 };
              });
            }
          }}
          substractBis={() => {
            if (this.state.countBis > 0) {
              this.setState((prevState) => {
                return { countBis: prevState.countBis - 1 };
              });
            }
          }}
        />
        <p>L'application qui fait peur aux horlogers</p>
      </div>
    );
  }
}

export default App;
