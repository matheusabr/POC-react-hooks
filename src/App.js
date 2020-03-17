import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      <h1 className="Title">POC - React Hooks</h1>
      <h2>useState() example:</h2>
      <HookCounter />
    </div>
  );
}

export default App;
