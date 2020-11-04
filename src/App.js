import React from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';



function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path='/' component ={Login}/>
      <Route path='/signup' component={SignUp}/>
    </div>
    </Router>
  );
}

export default App;
