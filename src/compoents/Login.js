import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Link, Router, BrowserRouter, withRouter } from "react-router-dom";
import { Card } from "material-ui/Card";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Dashboard from "./Dashboard";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  handleClick(event) {
    //const history = createBrowserHistory();
    var apiBaseUrl = "http://localhost:5000/login";
    var self = this;
    var payload = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(payload);
    if (payload.email != null && payload.password != null) {
      axios.post(apiBaseUrl, payload).then(res => {
        var response = res.data;
        if (response.status === "true") {
          this.setState({ isLoggedIn: true });
          console.log(response.message);
        } else {
          console.log(response.message);
        }
      });
    } else {
      alert("Fields can't be empty");
    }
  }

  render() {
    return (
      <Card
        style={{
          margin: "10% 35%",
          padding: 50,
          width: 400,
          alignItems: "center",
          textAlign: "center",
          alignSelf: "center"
        }}
      >
        <TextField
          hintText="Enter your Email"
          floatingLabelText="Email"
          onChange={(event, newValue) => this.setState({ email: newValue })}
          required
        />
        <br />
        <TextField
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          required
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />

        <RaisedButton
          label="Submit"
          primary={true}
          style={style}
          onClick={event => this.handleClick(event)}
        />
      </Card>
    );
  }
}
const style = {
  margin: 10,
  width: 100,
  floatingLabelFocusStyle: {
    color: "#000"
  }
};

export default withRouter(Login, { withRef: true });
