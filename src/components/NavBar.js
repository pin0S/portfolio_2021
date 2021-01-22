import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to='/projects'>lProjects</NavLink>
                    <NavLink to='/about'>About me</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </nav>
            </div>
        </header>
    )
}