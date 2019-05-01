import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Form from "./Components/Forms/Form";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Form} />
        <Route path="/Form" exact component={Form} />
      </BrowserRouter>
    );
  }
}

export default App;
