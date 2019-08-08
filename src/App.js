import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;
