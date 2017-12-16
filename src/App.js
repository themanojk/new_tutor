import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Dashboard from './Dashboard'
class App extends Component {



  state = { selectedOption: 'Login as', }


  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    if (selectedOption != null) {
      console.log(`Selected: ${selectedOption.label}`);
    } else {
      console.log('Cleared');
      this.setState({ "Login As": "manoj" });
    }

  }

  handleClick(event) {
    const history = createBrowserHistory();
    var apiBaseUrl = "http://localhost:5000/login";
    var self = this;
    var payload = {
      "email": this.state.email,
      "password": this.state.password,
      "userType": this.state.selectedOption.value
    }
    console.log(payload);
    if (payload.email != null && payload.password != null) {
      axios.post(apiBaseUrl, payload)
        .then((res) => {

          var response = res.data;
          if (response.status === "true") {
            <Router history={history}>
              <App />
            </Router>
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
    var options = ["Student", "Teacher", "School"];

    return (

      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Login"
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div>
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
                <br />
                <Select
                  name="userType"
                  value={this.state.selectedOption ? this.state.selectedOption.value : "Login As"}
                  onChange={this.handleChange}
                  placeholder="Select Login As"

                  options={[

                    { value: '0', label: 'Student', clearableValue: false },
                    { value: '1', label: 'Teacher', clearableValue: false },
                    { value: '2', label: 'School', clearableValue: false }
                  ]}
                />
                <br />


                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 10,
  floatingLabelFocusStyle: {
    color: "#000"
  }
};

export default App;
