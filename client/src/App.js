import React from 'react';
import './App.css';

import { Route, Switch, Link } from "react-router-dom";

import Charts from "./components/Charts/Charts";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-logo'></div>
        <ul className="company-wrapper">
          <Link to="/">
            <li className="company">HOME</li>
          </Link>
          <Link to="/AAPL">
            <li className="company">Apple</li>
          </Link>
          <Link to="/GOOGL">
            <li className="company">Google</li>
          </Link>
          <Link to="/MSFT">
            <li className="company">Microsoft</li>
          </Link>
          <Link to="/AMZN">
            <li className="company">Amazon</li>
          </Link>
          <Link to="/FB">
            <li className="company">Facebook</li>
          </Link>
          <Link to="/TSLA">
            <li className="company">Tesla</li>
          </Link>
        </ul>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" children={<Charts />} />
        <Route component={PageNotFound} />
      </Switch>

    </div>
  );
}

export default App;
