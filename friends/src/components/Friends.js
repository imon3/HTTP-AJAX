import React from 'react';
import axios from 'axios';

import FriendForm from './FriendForm'

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(res => {
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => err)
    }

    render() {
        console.log(this.state.friends)
        return (
            <div>
                {this.state.friends.map(friend => {
                    return (
                        <div key={friend.id}>
                            <p>name: {friend.name}</p>
                            <p>age: {friend.age}</p>
                            <p>email: {friend.email}</p>
                        </div>
                    )
                })}
                <FriendForm />
            </div>
        )
    }
}

export default Friends;