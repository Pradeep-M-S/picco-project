import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Rentals from "./pages/Rentals/Rentals";
import Outstation from "./pages/OutStation/Outstation";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Outstation} />
        <Route path="/rentals" component={Rentals} />
      </Switch>
    </Router>
  );
}

export default App;
