import React from 'react';
import './FriendsList.css'

const FriendsList = (props) => {
    const {name} = props.friends
    return (
        <div className='friends-list' >
        <small>{name}</small>
            
        </div>
    );
};

export default FriendsList;