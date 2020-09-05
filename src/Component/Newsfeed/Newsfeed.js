import React from 'react';
import './Newsfeed.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Newsfeed = (props) => {
    const {title,body,id} = props.feed
    return (
        <div className='newsfeed' >
        <h2>{title}</h2>
        <small>5 minutes ago</small>
        <br/>
        <p>{body}</p>
        <Button variant="contained" color="secondary"><Link to={`/posts/${id}`}>See More</Link></Button>
        
        </div>
        
    );
};

export default Newsfeed;