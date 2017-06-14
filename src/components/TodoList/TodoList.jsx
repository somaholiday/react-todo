import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = function({todos, removeTodo}) {
  const todoElements = todos.map(todo => (
    <Todo todo={todo} key={todo.id} removeTodo={removeTodo}/>  
  ));

  return (
    <ul>
      {todoElements}
    </ul>
  );
};

export default TodoList;
