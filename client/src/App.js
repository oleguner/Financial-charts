import React from 'react';
import './App.css';
import { io } from "socket.io-client";

function App() {
  const socket = io.connect("http://localhost:4000", { reconnect: true });

  socket.emit('start');
  socket.on('ticker', function(response) {
    const res = Array.isArray(response) ? response : [response];
    const json = res.map(item => JSON.stringify(item)).join('\n');
    console.log(json);
});

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
