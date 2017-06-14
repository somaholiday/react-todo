import React from 'react';
import './Todo.css';

const Todo = function(props) {
  const { todo, removeTodo } = props;

  return (
    <li className="Todo" onClick={() => removeTodo(todo.id)}>
      {todo.text}
    </li>
  );
};

export default Todo;
