import React from 'react';
import logo from './logo.svg';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button></Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
