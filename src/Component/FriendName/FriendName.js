import React from 'react';
import './FriendName.css'

const FriendName = (props) => {
    return (
        <div>

        <h1>{props.friends.name}</h1>
            
        </div>
    );
};

export default FriendName;