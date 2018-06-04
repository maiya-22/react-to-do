/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  task, id, completed, deleteTask, toggleTask,
}) => (
  <div className="App-task">
    <p
      className={`App-task-text ${completed ? 'crossed-out' : null}`}
      onClick={() => {
        toggleTask(id);
      }}
    >
      {task}
    </p>
    <button
      onClick={() => {
        deleteTask(id);
      }}
      className="App-task-btn"
    >
      ✕
    </button>
  </div>
);

Task.propTypes = {
  task: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
};

export default Task;
