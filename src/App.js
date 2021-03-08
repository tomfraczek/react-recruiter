import React from "react";
import './App.css';
import './global/global-css.scss'
import Navigation from './components/Navigation';
import Github from './components/Github';
import Factorial from './components/Factorial';
import About from './components/About';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App container">
        <Navigation />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/factorial' component={Factorial} /> 
          <Route path='/github' component={Github} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
