import React from 'react';
import './FriendCard.css'

function FriendCard(props) {

    return (
        <div className='friend-card'>
            <p><span>Name:</span> {props.friend.name}</p>
            <p><span>Age:</span> {props.friend.age}</p>
            <p><span>Email:</span> {props.friend.email}</p>
        </div >
    )

}

export default FriendCard;