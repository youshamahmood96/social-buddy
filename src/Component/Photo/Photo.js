import React from 'react';
import './Photo.css'
const Photo = (props) => {
    return (
        <div className='photo-area' >
            <img src={props.photo.picture.large} alt='photo'></img>
        </div>
    );
};

export default Photo;