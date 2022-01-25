import React from "react";
import "./App.css";

import Counter from "./components/Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter increment="+" substract="-" />
      </div>
    );
  }
}

export default App;
