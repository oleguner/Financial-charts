import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { connect, Provider } from 'react-redux';


import { io } from "socket.io-client";

import { store, ACTION_ADD_DATA } from './state/store';

const socket = io.connect("http://localhost:4000");

let counter = 0;
socket.emit('start');
socket.on('ticker', function (response) {
  const res = Array.isArray(response) ? response : [response];
  const json = res.map(item => item);

  store.dispatch({ type: ACTION_ADD_DATA, payload: json })
});

const mapStateToProps = (state) => {
  return {
    ...state
  }
};


const WrappedApp = connect(mapStateToProps)(App);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();
