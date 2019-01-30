import React from 'react';
import axios from 'axios';
import FriendCard from './FriendCard'

class FriendsList extends React.Component {
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
                        <FriendCard key={friend.id} friend={friend} />
                    )
                })}

            </div>
        )
    }
}

export default FriendsList;