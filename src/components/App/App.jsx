import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import InputPage from "../InputPages/InputPage";
import Review from "../InputPages/Review";

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
        <InputPage
          title="How are you feeling today?"
          action={{}}
          inputType="number"
          nextPage="/understanding"
        />
      </Route>
      <Route path="/understanding">
        <InputPage
          title="How well are you understanding the content?"
          inputType="number"
          action={{}}
          nextPage="/support"
        />
      </Route>
      <Route path="/support">
        <InputPage
          title="How well are you being supported?"
          action={{}}
          inputType="number"
          nextPage="/comments"
        />
      </Route>
      <Route path="/comments">
        <InputPage
          title="Any comments you want to leave?"
          action={{}}
          inputType="number"
          nextPage="/review"
        />
      </Route>
      <Route path="/review">
        <Review />
      </Route>
    </Router>
  );
}

export default App;
