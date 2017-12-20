import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

class Section extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />;
      </Switch>
    );
  }
}

export default Section;
