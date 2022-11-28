import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { RequireAuth } from './contexts/RequireAuth.js';
import Home from "./pages/Home";
import { Register } from "./pages/Register";
import { Global } from "./styles/global.js";

export const App = () => {
  console.log('Cheguei no app');
  return (
    <Switch>
      <Route exact path="/" render={() => <RequireAuth ><Home /></RequireAuth>} />
      <Route  path="/register" render={() => <Register />} />
      <Route  path="/login" >{ <Redirect to='/'/> }</Route>
      <Route path="*">{ <Redirect to='/'/> }</Route>
      <Global />
    </Switch>
  );
};
