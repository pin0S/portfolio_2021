import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/NavBar.scss'

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/about'>About me</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </nav>
            </div>
        </header>
    )
}