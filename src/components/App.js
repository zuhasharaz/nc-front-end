import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>NC News</h1>
          <Route exact path="/" component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
