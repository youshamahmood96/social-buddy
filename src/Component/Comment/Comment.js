import React from 'react';
import './Comment.css'
const Comment = (props) => {
    const {name,body} = props.comment
    return (
        <div className='comment-box' >
        
        <h1>Name:{name}</h1>
        <p>{body}</p>
            
        </div>
    );
};

export default Comment;