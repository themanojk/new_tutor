import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

import LeftDrawer from "./LeftDrawer";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div className="nav-bar">
        <MuiThemeProvider>
          <AppBar
            title="My App"
            onLeftIconButtonTouchTap={() => this.toggleDrawer()}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default DashBoard;
