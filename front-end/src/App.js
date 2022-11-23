import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Private = (props) => {
  console.log(props.location.pathname);
  const logged = false;
  return logged > 0 ? <Home /> : <Login />;
};

const App = () => {
  return (
    <Switch>
      {/* <Route exact path="/" render={(props) => <Private {...props} />} /> */}
      {/* <Route exact path="/login" render={(props) => <Login {...props} />} /> */}
      <Route exact path="/register" render={(props) => <Register {...props} />} />
      {/* <Route exact path="/" element={ <Navigate to="/login" />}/>  */}
      {/* <Route exact path="/login" component={Private} /> */}
      {/* <Route exact path="/transations" component={Private} /> */}
      {/* <Route path="/register" component={Register} /> */}
      <Route path="*" render={(props) => <Private {...props} />} />
    </Switch>
  );
};

export default App;
