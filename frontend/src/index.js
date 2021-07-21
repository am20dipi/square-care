import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


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

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'pink',
  textDecoration: 'none',
  color: 'black',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'red'
      }}
    >Home</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
    <NavLink
      to="/signup"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Signup</NavLink>
  </div>

ReactDOM.render(
  <Router>
    <div>
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
