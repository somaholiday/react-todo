import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{
        id: 0,
        text: "Learn React!",
      }],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
 
  }

  removeTodo(todoId) {
 
  }

  render() {
    return (
      <div className="App">
        <Header/>
        
        <div className="App-TodoWrapper">
          <div className="App-TodoForm-wrapper">
            <TodoForm/>
          </div>
          <div className="App-TodoList-wrapper">
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
