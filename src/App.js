import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./App.css";
import MainForm from "./Components/Forms/MainForm";
import Header from "./Components/Layouts/Header";
import Info from "./Components/Pages/Info";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header>
          <Route path="/" exact component={MainForm} />
          <Route path="/MainForm" exact component={MainForm} />
          <Route path="/Info" exact component={Info} />
        </Header>
      </BrowserRouter>
    );
  }
}

export default App;
