import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList'

import { createStore } from 'redux'

import { makeDispatchMapper } from 'redux-boilerplate';

import MyLayout from './components/MyLayout/'


class App extends Component {
  render() {
    return (
      <div className="App">
        <MyLayout/>
      </div>
    );
  }
}

export default App;


