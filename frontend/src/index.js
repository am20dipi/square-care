import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div><br></br>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div><br></br>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
