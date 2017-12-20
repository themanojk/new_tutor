import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MainApp from "./compoents/MainApp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <MainApp />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
