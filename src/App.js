import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm'
import NavBar from './components/NavBar/NavBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: "What's up Austin",
      todos: []
    }
  }

  handleChange(evt){
    console.log(evt)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          React To Do App
        </header>
        <NavBar />
        <TodoForm
        textValue={}
        handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
