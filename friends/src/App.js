import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import FriendsList from './components/FriendsList'
import FriendForm from './components/FriendForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={FriendsList} />
        <Route path='/form' component={FriendForm} />
      </div>
    );
  }
}

export default App;
