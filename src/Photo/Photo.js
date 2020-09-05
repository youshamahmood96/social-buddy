import React from 'react';
import './Photo.css'

const Photo = (props) => {
    return (
        <div  >
        <img className='photo' src={props.photo.picture.large} alt='photo'></img>
            
        </div>
    );
};

export default Photo;