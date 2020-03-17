import React from 'react';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterSafe from './components/HookCounterSafe';
import HookStateForm from './components/HookStateForm';

function App() {
  return (
    <div className="App">
      <h1 className="Title">POC - React Hooks</h1>
      <h2>useState() example:</h2>
      <HookCounter />
      <h2>useState() update state safely example:</h2>
      <HookCounterSafe />
      <h2>useState() with form example:</h2>
      <HookStateForm />
    </div>
  );
}

export default App;
