import React, { Component } from "react";
import "./App.scss";

import Header from "./Header/";

// const axiosBase = axios.create({
//   baseURL: "/recipes/"
// });

class App extends Component {
  // componentDidMount() {
  //   axiosBase
  //     .get("all")
  //     .then(response => console.log(response))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <Header />
      // <div className="App">
      // </div>
    );
  }
}

export default App;
