import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return(
        <div class="navbar">
            <NavLink activeClassName='nav-item-active' exact to="/" >Bio</NavLink>
            <NavLink activeClassName='nav-item-active' to="/education">Education</NavLink>
            <NavLink activeClassName='nav-item-active' to="/experience">Experience</NavLink>
        </div>
    );
}


export default NavBar;