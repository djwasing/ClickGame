import React from 'react';
import './images/style.css';

function Navbar(props) {
    
    return (
        <nav class="navbar">
            <ul>
                <li>M / M / M</li>
                <li>{props.message}</li>
                <li>Score: {props.x} | Top Score: {props.y}</li>
            </ul>
        </nav>
    )
}

export default Navbar;