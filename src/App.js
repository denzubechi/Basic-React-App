import React from 'react';
import Todo from './components/Todo';


function App() {
 
  return (
    <div>
      <h1>Todo Items</h1>
      <Todo text='Learn React' />
      <br></br>
      <Todo text='Master React' />
      <br></br>
      <Todo text='Explore the full react course' />
    </div>
  );
}

export default App;
