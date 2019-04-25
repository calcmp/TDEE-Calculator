import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import MainForm from "./Components/Forms/MainForm";
//import Info from "./Components/Pages/Info";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={MainForm} />
        <Route path="/MainForm" exact component={MainForm} />
      </BrowserRouter>
    );
  }
}

export default App;
