import React from 'react';
import './App.css';

import { Route, Switch, Link } from "react-router-dom";

import Charts from "./components/Charts/Charts";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";

function App() {
  const handleClick = (clickEvent) => {
    [...document.querySelectorAll('.company')].map(li => li.classList.remove('active-link'));
    clickEvent.target.classList.add('active-link');
    console.log(clickEvent.target.textContent );
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-logo'></div>
        <ul className="company-wrapper" onClick={handleClick}>
          <Link className="company-link" to="/">
            <li className="company">HOME</li>
          </Link>
          <Link className="company-link"  to="/AAPL">
            <li className="company">Apple</li>
          </Link>
          <Link className="company-link"  to="/GOOGL">
            <li className="company">Google</li>
          </Link>
          <Link className="company-link"  to="/MSFT">
            <li className="company">Microsoft</li>
          </Link>
          <Link className="company-link"  to="/AMZN">
            <li className="company">Amazon</li>
          </Link>
          <Link className="company-link"  to="/FB">
            <li className="company">Facebook</li>
          </Link>
          <Link className="company-link"  to="/TSLA">
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
