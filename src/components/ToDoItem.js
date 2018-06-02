import React from 'react';

const ToDoItem = props =>
  // console.log(props);
  (
    <div className="App-todoitem">
      <p className="App-todoitem-text">{props.toDoItem}</p>
      <button onClick={props.delete} className="App-todoitem-btn">
        ✕
      </button>
    </div>
  );
export default ToDoItem;
