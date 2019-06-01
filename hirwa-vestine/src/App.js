import React from "react";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/home";
import Resume from "./pages/resume";

function App() {
  return (
    <div className="app">
      <HashRouter basename="/">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="*" component={NotFound} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
