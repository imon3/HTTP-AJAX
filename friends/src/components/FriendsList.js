import React from 'react';
import FriendCard from './FriendCard'

class FriendsList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.friends)
        return (
            <div>
                {this.props.friends.map(friend => {
                    return (
                        <FriendCard key={friend.id} friend={friend} />
                    )
                })}

            </div>
        )
    }
}

export default FriendsList;