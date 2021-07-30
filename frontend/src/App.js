import React, { useState } from 'react'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SquaresContainer from './containers/SquaresContainer'
import SquareCard from './containers/SquareCard'

function App() {

  return (
    <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> 
      </div>
  </Router>
  )

}

export default App;
