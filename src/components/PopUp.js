import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';


const PopUp = (props) => {
    return (
        <div className={props.stylePopup}>
            <div className="block-1">
                <i class="fas fa-times" onClick={props.close}></i>
                <input type="email" name="email" id="email" placeholder="E-Mail Adresse" className="login-input " />
                <input type="password" name="password" id="password" placeholder="Password" className="login-input " />
            </div>

            <div className="block-2">
                <Link className="password-vergessen">Password vergessen?</Link>
                <Link className="login-btn centering" to="/" onClick={props.sigIn}>Log in</Link>
            </div>

        </div>
    );
}


export default PopUp;