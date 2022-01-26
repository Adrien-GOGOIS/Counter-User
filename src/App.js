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

    this.substract = this.substract.bind(this);
    this.substract2 = this.substract2.bind(this);
    this.increment = this.increment.bind(this);
    this.increment2 = this.increment2.bind(this);
  }

  // FONCTION DE SOUSTRACTION COMPTEUR 1 //
  substract() {
    if (this.state.count > 0) {
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
    }
  }

  // FONCTION DE SOUSTRACTION COMPTEUR 2 //
  substract2() {
    // GUARD si compteur 1 = compteur 2 --> Soustraction sur les 2 :
    if (this.state.count === this.state.countBis && this.state.count > 0) {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1,
        };
      });
    }
    // Soustraction si compteur > 0
    if (this.state.countBis > 0) {
      this.setState((prevState) => {
        return { countBis: prevState.countBis - 1 };
      });
    }
  }

  // FONCTION D'ADDITION COMPTEUR 1 //
  increment() {
    // Guard limitation 1er compteur à 100
    if (this.state.count === 100) {
      return;
    }
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
      /* Limitation 1er compteur au count du 2e compteur */
    }
    if (this.state.count < this.state.countBis) {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }
  }

  // FONCTION D'ADDITION COMPTEUR 2 //
  increment2() {
    if (this.state.countBis < 100) {
      this.setState((prevState) => {
        return { countBis: prevState.countBis + 1 };
      });
    }
  }

  // Rendu de l'App
  render() {
    return (
      <div>
        <h1>Counter</h1>

        {/* Premier compteur avec props increment et substract agissant sur le state 'count' */}
        <Counter
          count={this.state.count}
          increment={this.increment}
          substract={this.substract}
        />

        {/* 2e compteur */}
        <CounterBis
          countBis={this.state.countBis}
          incrementBis={this.increment2}
          substractBis={this.substract2}
        />
        <p>
          L'application qui fait transpirer ton horloger !{" "}
          <span>&#128561;</span>
        </p>
      </div>
    );
  }
}

export default App;
