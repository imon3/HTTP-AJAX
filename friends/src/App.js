import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import FriendsList from './components/FriendsList'
import FriendForm from './components/FriendForm'

class App extends Component {
  state = {
    friends: [],
    newFriend: {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data,
        })
      })
      .catch(err => err)
  }

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        newfriend: {
          ...prevState.newFriend,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  addFriend = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Route
          exact path='/'
          render={props =>
            <FriendsList {...props}
              friends={this.state.friends}
            />}
        />
        <Route
          path='/form'
          render={props =>
            <FriendForm {...props}
              newFriend={this.state.newFriend}
              handleChanges={this.handleChanges}
              addFriend={this.addFriend}
            />}
        />
      </div>
    );
  }
}

export default App;
