import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import TopNavi from "./TopNavi";
import Home from "../Routes/Home";
import Tv from "../Routes/Tv";
import Search from "../Routes/Search";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  return (
    <Router>
      <TopNavi></TopNavi>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" exact component={Tv}></Route>
        <Route path="/search" exact component={Search}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </Router>
  );
};
