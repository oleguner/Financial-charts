import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { connect, Provider } from 'react-redux';


import { io } from "socket.io-client";

import { store, ACTION_ADD_DATA } from './state/store';

const socket = io.connect("http://localhost:4000");

let counter = 0;
socket.emit('start');
socket.on('ticker', function (response) {
  const res = Array.isArray(response) ? response : [response];
  const json = res.map(item => item);

  store.dispatch({type: ACTION_ADD_DATA, payload: json})
  
  console.log('================================================');
  counter += 1;
  console.log(counter);
  // console.log(json[0]);
  console.log(store.getState());

  console.log('================================================');
});



console.log(store.getState());


const mapStateToProps = (state) => {
  return {
    ...state
  }
};

const WrappedApp = connect(mapStateToProps)(App);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <WrappedApp />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
