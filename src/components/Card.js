import React from 'react';
import "./images/style.css";

function Card(props) {
    return (
    <img 
        className="imageCard"
        alt="motorcycle"
        src={props.imgSrc} 
        onClick={props.clickedImg}
    />
    )
    
}

export default Card;