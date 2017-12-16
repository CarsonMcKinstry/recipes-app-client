import React, { Component } from "react";
import "./App.scss";

import Header from "./Header/";
import Main from "./Main/";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
