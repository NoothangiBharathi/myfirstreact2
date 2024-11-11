

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';



import './App.css'

function App() {
  return (
    <div>
      <h1>Counter Example with useReducer</h1>
      <Counter />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
