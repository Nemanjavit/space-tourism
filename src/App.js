import React, { useEffect } from "react";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import Destionations from "./pages/Destionations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
// components
import Nav from "./components/Nav";
// basename="/space-tourism"

function App() {
  const location = useLocation();
  let page = location.pathname.split("/")[1];
  console.log(page);

  return (
    <div className={`page ${page}`}>
      <Nav />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/destination" component={Destionations} />
        <Route path="/crew" component={Crew} />
        <Route path="/technology" component={Technology} />
      </Switch>
    </div>
  );
}
export default App;
