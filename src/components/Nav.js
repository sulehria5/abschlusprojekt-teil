import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { tsPropertySignature } from '@babel/types';

const Nav = (props) => {
    return (
        <nav className="nav">
            <div className="login-btn-block centering">
                <Link className="login-btn centering" onClick={props.showPopup} >Log in</Link>
            </div>
            <div className="menu-block centering">
                <i class="fas fa-bars"></i>
            </div>

        </nav>
    );
}

export default Nav;