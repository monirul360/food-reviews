import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const menu = () => {
        const select = document.getElementById("reponsive-menu");
        select.classList.toggle("onclickMenu");
    }
    return (
        <div>
            <nav className='nav-content'>
                <div onClick={menu} className="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id='reponsive-menu'>
                    <li><Link to='/home'>home</Link></li>
                    <li><Link to='/reviews'>reviews</Link></li>
                    <li><Link to='/dashboard'>dashboard</Link></li>
                    <li><Link to='/blogs'>blogs</Link></li>
                    <li><Link to='/about'>about</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;