import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import CounterBis from "./components/CounterBis";

class App extends React.Component {
  // State parent
  constructor() {
    super();
    this.state = {
      count: 0,
      countBis: 0,
    };
  }

  // Rendu de l'App
  render() {
    return (
      <div>
        <h1>Counter</h1>

        {/* Premier compteur avec props increment et substract agissant sur le state 'count' */}
        <Counter
          count={this.state.count}
          increment={() => {
            {
              /* Guard si égalité, addition sur les 2 compteurs */
            }
            if (this.state.count === this.state.countBis) {
              this.setState((prevState) => {
                return {
                  count: prevState.count + 1,
                  countBis: prevState.countBis + 1,
                };
              });
            }

            {
              /* Addition, si le 1er compteur ne dépasse pas 100 ou le 2e compteur */
            }
            if (
              this.state.count < 100 &&
              this.state.count < this.state.countBis
            ) {
              this.setState((prevState) => {
                return { count: prevState.count + 1 };
              });
            }
          }}
          // Props de soustraction :
          substract={() => {
            if (this.state.count > 0) {
              this.setState((prevState) => {
                return { count: prevState.count - 1 };
              });
            }
          }}
        />

        {/* 2e compteur */}
        <CounterBis
          countBis={this.state.countBis}
          // Addition 2e compteur si inférieur à 100 :
          incrementBis={() => {
            if (this.state.countBis < 100) {
              this.setState((prevState) => {
                return { countBis: prevState.countBis + 1 };
              });
            }
          }}
          // Soustraction 2e compteur
          substractBis={() => {
            // GUARD si compteur 1 = compteur 2 --> Soustraction sur les 2 :
            if (this.state.count === this.state.countBis) {
              this.setState((prevState) => {
                return {
                  count: prevState.count - 1,
                  // countBis: prevState.countBis - 1,
                };
              });
            }

            // Soustraction si compteur > 0
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
