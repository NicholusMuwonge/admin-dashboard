import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">Dashboard</header>
        <Switch>
          <Route path="/" element={<></>} />
          <Route path="/user/:userId" element={<></>} />
          <Route path="*" element={<>Not Found</>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
