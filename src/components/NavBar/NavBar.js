import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss'


export default function NavBar() {
    const [navActive, setNavState] = useState(false);

    return (
        <header>
            <div>
                <nav>
                    <NavLink className={`${navActive ? "hide" : "showClose"}`} to='/projects'>Projects</NavLink>
                    <NavLink  className={`${navActive ? "hide" : "showClose"}`} to='/about'>About</NavLink>
                    <NavLink  className={`${navActive ? "hide" : "showClose"}`} to='/blog'>Blog</NavLink>
                    <div className={`menu-icon ${navActive ? "menu-closed-icon" : "menu-open-icon"}`} 
                    onClick={() => setNavState(!navActive)}><img src='/hbm.png' alt='menu icon'></img>
                    </div>
                </nav>
                
            </div>
        </header>
    )
}

