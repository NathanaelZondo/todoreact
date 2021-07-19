import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home.js';
import Home2 from './home2.js';
import FirebaseConfig from './firebase.js';
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore"
import Todo from './list.js';


const fb=firebase.initializeApp(FirebaseConfig)
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home2">SignIn</Link>
            </li>
            <li>
              <Link to="/">SignUp</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home2">
            <Home />
          </Route>
          <Route path="/list">
            <Todo />
          </Route>

          <Route path="/">
            <Home2 />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}



