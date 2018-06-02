import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';

import './App.css';
import Header from './Header';
import ToDoItem from './ToDoItem';
/* eslint react/jsx-filename-extension: 0 */

class App extends Component {
  constructor() {
    super();

    this.state = {
      newToDoItem: '',
      toDoList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleChange(e) {
    this.setState({ newToDoItem: e.target.value });
  }

  handleSubmit(e) {
    this.setState({
      newToDoItem: '',
      toDoList: [...this.state.toDoList, this.state.newToDoItem],
    });
    e.preventDefault();
  }

  delete() {
    console.log(this);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-todo-list">
          {this.state.toDoList.map((item, i) => (
            <ToDoItem key={uuidv1()} toDoItem={this.state.toDoList[i]} delete={this.delete} />
          ))}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h2>Enter a task:</h2>
            <input type="text" value={this.state.newToDoItem} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
