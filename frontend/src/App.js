import React, { useState } from 'react';
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SquareContainer from './containers/SquareContainer';

function App() {
  const [squares, setSquares] = useState(['Square 1', 'Square 2'])
  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <SquareContainer />
        <button>Add Square</button>
        <SquareContainer squares={squares} />
        
      </div>
  </Router>
  )

}

export default App;
