import './App.css';
import TodoList from '../src/components/TodoList'
import TodoInput from '../src/components/TodoInput'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';

function App() {
  return (
    <div className="App m-5">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
