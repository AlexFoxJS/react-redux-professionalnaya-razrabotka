import React, { Component } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoItem/>
      </div>
    );
  }
}

export default App;
