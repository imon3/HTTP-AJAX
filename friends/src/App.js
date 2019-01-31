import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import FriendsList from './components/FriendsList'
import FriendForm from './components/FriendForm'

class App extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data,
          newfriend: {
            name: '',
            age: '',
            email: ''
          }
        })
      })
      .catch(err => err)
  }

  handleChanges = e => {
    this.setState(prevState => {
      return {
        newfriend: {
          ...prevState.newfriend,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Route
          exact path='/'
          render={props =>
            <FriendsList {...props}
              friends={this.state.friends} />}
        />
        <Route
          path='/form'
          render={props =>
            <FriendForm {...props}
              handleChanges={this.handleChanges} />}
        />
      </div>
    );
  }
}

export default App;
