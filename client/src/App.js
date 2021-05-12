import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Link
} from "react-router-dom";

import { Apple } from "./components/Apple/Apple";
import { Google } from "./components/Google/Google";
import { Microsoft } from "./components/Microsoft/Microsoft";
import { Amazon } from "./components/Amazon/Amazon";
import { Facebook } from "./components/Facebook/Facebook";
import { Tesla } from "./components/Tesla/Tesla";
import Home from "./components/Home/Home";

// import { connect } from 'react-redux';

function App({ state }) {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <div className='App-logo'></div>
          <ul className="company-wrapper">
            <a href="/"><li className="company">HOME</li></a>
            <a href="/Apple"><li className="company">Apple</li></a>
            <a href="/Google"><li className="company">Google</li></a>
            <a href="/Microsoft"><li className="company">Microsoft</li></a>
            <a href="/Amazon"><li className="company">Amazon</li></a>
            <a href="/Facebook"><li className="company">Facebook</li></a>
            <a href="/Tesla"><li className="company">Tesla</li></a>
          </ul>
          <Switch>
            <Route exact path="/Apple" component={Apple} />
            <Route exact path="/Google" component={Google} />
            <Route exact path="/Microsoft" component={Microsoft} />
            <Route exact path="/Amazon" component={Amazon} />
            <Route exact path="/Facebook" component={Facebook} />
            <Route exact path="/Tesla" component={Tesla} />
            <Route exact path="/" component={Home} />
            <Route component={Home}/>
          </Switch>
        </Router>
      </header>


    </div>
  );
}

export default App;
