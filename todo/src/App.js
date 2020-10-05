import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import './App.css';

function App() {
  const [newTodo, setNewToDo] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(state));
  // }, [state]);

  // const store = createStore(reducer);

  const handleChanges = e => {
    setNewToDo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const toggleCompleted = clickId => {
    dispatch({ type: 'TOGGLE_COMPLETED', payload: clickId });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <TodoForm
          handleSubmit={handleSubmit}
          handleChanges={handleChanges}
          clear={clearCompleted}
        />

        <Todo state={state} toggleCompleted={toggleCompleted} />
      </header>
    </div>
  );
}

export default App;