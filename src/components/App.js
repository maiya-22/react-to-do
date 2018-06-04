/* eslint react/jsx-filename-extension: 0 */
import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

import './App.css';
import Header from './Header';
import Task from './Task';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      newTask: '',
      taskList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }

  handleChange(e) {
    this.setState({ newTask: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { newTask } = this.state;

    if (newTask) {
      this.setState({
        newTask: '',
        taskList: [
          ...this.state.taskList,
          {
            task: newTask,
            id: uuidv1(),
            completed: false,
          },
        ],
      });
    }
  }

  deleteTask(id) {
    const index = this.state.taskList.findIndex(obj => obj.id === id);
    this.setState({
      taskList: [...this.state.taskList.slice(0, index), ...this.state.taskList.slice(index + 1)],
    });
  }

  toggleTask(id) {
    const index = this.state.taskList.findIndex(obj => obj.id === id);
    const { taskList } = this.state;
    taskList[index].completed = !taskList[index].completed;
    this.setState({ taskList });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label>
            <h3>Enter a task:</h3>
            <input autoFocus type="text" value={this.state.newTask} onChange={this.handleChange} />
          </label>
        </form>
        <div className="App-todo-list">
          {this.state.taskList.map(taskObj => (
            <Task
              key={taskObj.id}
              task={taskObj.task}
              completed={taskObj.completed}
              id={taskObj.id}
              deleteTask={this.deleteTask}
              toggleTask={this.toggleTask}
            />
          ))}
        </div>
      </div>
    );
  }
}
