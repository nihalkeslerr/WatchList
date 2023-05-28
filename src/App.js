import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched";
import Add from "./Components/Add";
import "./lib/fontawesome/css/all.min.css";
import { GlobalProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={WatchList} />
          <Route path="/Watched" component={Watched} />
          <Route path="/add" component={Add} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
