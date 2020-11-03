//add a form that dispatches an "ADD_TODO" action to be able to add a to do item ot your list

import React from 'react';

function TodoForm(props) {
  return (
    <div className="App">
      <h1>Reducer Todo</h1>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="newTodo"
          placeholder="add you new todo task"
          onChange={props.handleChanges}
        />
        <button className="add" type="submit">
          Add To Do
        </button>
        <button className="clear" onClick={props.clear}>
          Clear Completed
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
