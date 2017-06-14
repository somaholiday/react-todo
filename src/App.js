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
    console.log("add todo:", todoText);

    const newTodo = {
      text: todoText,
      id: Date.now(),
    };

    const newTodos = [
      ...this.state.todos,
      newTodo
    ];

    this.setState({todos: newTodos});
  }

  removeTodo(todoId) {
    console.log("remove todo:", todoId);

    const newTodos = this.state.todos.filter(todo => todo.id !== todoId);

    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div className="App">
        <Header title="React Todo"/>
        
        <div className="App-TodoWrapper">
          <div className="App-TodoForm-wrapper">
            <TodoForm
              addTodo={this.addTodo}
            />
          </div>
          <div className="App-TodoList-wrapper">
            <TodoList
              todos={this.state.todos}
              removeTodo={this.removeTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
