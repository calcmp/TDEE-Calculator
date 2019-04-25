import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import MainForm from "./Components/Forms/MainForm";
<<<<<<< HEAD
//import Info from "./Components/Pages/Info";
=======
import Header from "./Components/Layouts/Header";
import Info from "./Components/Pages/Info";
>>>>>>> 6c6f0a3350c96fba8016ea5aab7353e86f7ee06e

class App extends Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
        <Route path="/" exact component={MainForm} />
        <Route path="/MainForm" exact component={MainForm} />
=======
        <Header>
          <Route path="/" exact component={MainForm} />
          <Route path="/MainForm" exact component={MainForm} />
          <Route path="/Info" exact component={Info} />
        </Header>
>>>>>>> 6c6f0a3350c96fba8016ea5aab7353e86f7ee06e
      </BrowserRouter>
    );
  }
}

export default App;
