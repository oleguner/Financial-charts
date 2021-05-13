import React from 'react';
import './App.css';

import {
  BrowserRouter as Router, Route, Switch, Link, useParams
} from "react-router-dom";

import Child from "./components/Apple/Child";
// import { Google } from "./components/Google/Google";
// import { Microsoft } from "./components/Microsoft/Microsoft";
// import { Amazon } from "./components/Amazon/Amazon";
// import { Facebook } from "./components/Facebook/Facebook";
// import { Tesla } from "./components/Tesla/Tesla";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
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
          <Switch>
            {/* <Route exact path="/Apple" component={Apple} />
            <Route exact path="/Google" component={Google} />
            <Route exact path="/Microsoft" component={Microsoft} />
            <Route exact path="/Amazon" component={Amazon} />
            <Route exact path="/Facebook" component={Facebook} />
            <Route exact path="/Tesla" component={Tesla} />
          <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/:id" children={<Child />} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </header>


    </div>
  );
}

// function Child() {
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

export default App;
