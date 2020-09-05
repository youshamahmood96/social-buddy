import React from 'react';
import './Comment.css';
const Comment = (props) => {

    const { name, body, email } = props.comment
    return (
        <div className="comment-box">
          <h1>{name}</h1>
          <small>{email}</small>
          <p>{body}</p>
        </div>
    );
}

export default Comment;