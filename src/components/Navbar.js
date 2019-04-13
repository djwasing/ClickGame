import React from 'react';
import './images/style.css';

function Navbar(props) {
    
    return (
        <nav class="navbar" id="navbar">
            <ul>
                <li id="head1">M / M / M</li>
                <li id="head2">{props.message}</li>
                <li id="head3">Score: {props.x} | Top Score: {props.y}</li>
            </ul>
        </nav>
    )
}

export default Navbar;