import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonAppBar from "../Header/ButtonAppBar";
import InputPage from "../InputPages/InputPage";
import Review from "../InputPages/Review";
import StartPage from "../StartPages/StartPage";
import AdminPage from "../AdminPage/AdminPage";

function App() {
  return (
    <Router>
      <ButtonAppBar />
      <Route path="/" exact>
        <StartPage page="start" />
      </Route>
      <Route path="/feeling">
        <InputPage
          title="How are you feeling today?"
          inputType="number"
          actionType="FEELING"
          nextPage="/understanding"
        />
      </Route>
      <Route path="/understanding">
        <InputPage
          title="How well are you understanding the content?"
          inputType="number"
          actionType="UNDERSTANDING"
          nextPage="/support"
        />
      </Route>
      <Route path="/support">
        <InputPage
          title="How well are you being supported?"
          inputType="number"
          actionType="SUPPORT"
          nextPage="/comments"
        />
      </Route>
      <Route path="/comments">
        <InputPage
          title="Any comments you want to leave?"
          inputType="text"
          actionType="COMMENTS"
          nextPage="/review"
        />
      </Route>
      <Route path="/review">
        <Review />
      </Route>
      <Route path="/complete">
        <StartPage page="complete" />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
    </Router>
  );
}

export default App;
