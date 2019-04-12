import React from 'react';

function Header(props) {
    
    return (
        <div>
            <h1>Moto Memory Madness</h1>
            <h2>The Challenge: Click each image only once to win</h2>
            <h3>Message Center: {props.message}</h3>
            <p>Score: {props.x}</p>
            <p>Top Score: {props.y}</p>
        </div>
    )
}

export default Header;