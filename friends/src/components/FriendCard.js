import React from 'react';

const FriendCard = (props) => {

    return (
        < div >
            <p>Name: {props.friend.name}</p>
            <p>Ame: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div >
    )
}

export default FriendCard;