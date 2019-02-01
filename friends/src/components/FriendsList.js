import React from 'react';
import FriendCard from './FriendCard'

function FriendsList(props) {

    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <FriendCard key={friend.id} friend={friend} />
                )
            })}

        </div>
    )
}

export default FriendsList;