import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import GetUsersContainer from "./getUsers/GetUsersContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Dashboard</h1>
        </header>
        <Switch>
          <Route path="/" element={<GetUsersContainer />} />
          <Route path="/user/:userId" element={<></>} />
          <Route path="*" element={<>Not Found</>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
