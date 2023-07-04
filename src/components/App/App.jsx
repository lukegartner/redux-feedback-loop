import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Feeling from "../InputPages/Feeling";
import Understanding from "../InputPages/Understanding";
import Support from "../InputPages/Support";
import Comments from "../InputPages/Comments";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Route path="/feeling">
        <Feeling />
      </Route>
      <Route path="/understanding">
        <Understanding />
      </Route>
      <Route path="/support">
        <Support />
      </Route>
      <Route path="/comments">
        <Comments />
      </Route>
    </Router>
  );
}

export default App;
