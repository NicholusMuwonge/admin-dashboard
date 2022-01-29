import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { useBeforeunload } from 'react-beforeunload';
import "./App.css";
import GetUsersContainer from "./getUsers/GetUsersContainer";
import EditUsersContainer from "./editUser/editFormContainer";

function App() {
  useBeforeunload(()=>localStorage.removeItem('persist:root'));
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Dashboard</h1>
        </header>
        <Switch>
          <Route path="/" element={<GetUsersContainer />} />
          <Route path="/user/:userId" element={<EditUsersContainer/>} />
          <Route path="*" element={<>Not Found</>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
