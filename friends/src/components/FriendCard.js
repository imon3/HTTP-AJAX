import React from 'react';
import './FriendCard.css'

class FriendCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='friend-card'>
                <p><span>Name:</span> {this.props.friend.name}</p>
                <p><span>Age:</span> {this.props.friend.age}</p>
                <p><span>Email:</span> {this.props.friend.email}</p>
            </div >
        )
    }

}

export default FriendCard;