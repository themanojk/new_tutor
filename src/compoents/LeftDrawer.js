import React from "react";
import Link from "link-react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// Styles
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

export default class LeftDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={open => this.setState({ open })}
          >
            <Link to="/home">
              <MenuItem onTouchTap={this.handleClose.bind(this)}>Home</MenuItem>
            </Link>
            <Link to="/topics">
              <MenuItem onTouchTap={this.handleClose.bind(this)}>404</MenuItem>
            </Link>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}
