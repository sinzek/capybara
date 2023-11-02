import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}   from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
        </ul>


        <hr />

        <Switch>
          <Route path="/home">
            <App />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;


function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}

function Chat() {
  return (
    <div>
      <h2>Chat</h2>
    </div>
  );
}