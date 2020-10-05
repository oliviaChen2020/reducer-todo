//add a form that dispatches an "ADD_TODO" action to be able to add a to do item ot your list

import React from 'react';

function TodoForm(props) {
  return (
    <div className='App'>
      <form onSubmit={props.handleSubmit}>
        <input type='text' name='newTodo' onChange={props.handleChanges} />
        <button type='submit'>Add To Do</button>
        <button onClick={props.clear}>Clear Completed</button>
      </form>
    </div>
  );
}

export default TodoForm;