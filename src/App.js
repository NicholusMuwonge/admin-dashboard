import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import GetUsersContainer from "./getUsers/GetUsersContainer";
import EditUsersContainer from "./editUser/editFormContainer";
import AddUsersContainer from "./addUser/AddUserContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Dashboard</h1>
        </header>
        <Switch>
          <Route path="/" element={<GetUsersContainer />} />
          <Route path="/user/:userId" element={<EditUsersContainer/>} />
          <Route path="/user/new" element={<AddUsersContainer/>} />
          <Route path="*" element={<><b>404</b> | Not Found</>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
