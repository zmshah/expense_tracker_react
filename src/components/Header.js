import React from 'react';
import {Link} from 'react-router-dom';

//The header component
export const Header = () => {
    return (
        //Turn expense tracker header into a prop?
        <div className = 'header'>
            <h2>Expenses Tracker</h2>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </div>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}