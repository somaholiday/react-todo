import React from 'react';
import './TodoForm.css';

const TodoForm = function(props) {
  const {addTodo} = props;

  let input;

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input className="TodoForm-input" ref={node => {
        input = node;
      }} />
    </form>
  );
};

export default TodoForm;
