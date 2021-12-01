import React, { useEffect } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import Destionations from "./pages/Destionations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
// components
import Nav from "./components/Nav";

function App() {
  const location = useLocation();

  let page = location.pathname.split("/")[2];

  return (
    <div className={`page ${page}`}>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={HomePage} />
        <Route path="/destination" component={Destionations} />
        <Route path="/crew" component={Crew} />
        <Route path="/technology" component={Technology} />
      </Switch>
    </div>
  );
}
export default App;
