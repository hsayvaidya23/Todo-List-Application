import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder='Task...' />
        <button>Add Task</button>
      </div>
      <hr />
    </div>
  );
}

export default App;
