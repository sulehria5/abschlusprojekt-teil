import React, { Component } from 'react';
import './Header.css';
import logo from "../image/Logo.png"
import { Link } from 'react-router-dom'
import PopUp from './PopUp';
import Nav from './Nav';




class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stylePopup: 'login-popup'
        }
    }

    loginPopupHandler = () => {
        this.setState({ stylePopup: 'login-popup show' })
    }

    closeLoginPopupHandler = () => {
        this.setState({ stylePopup: 'login-popup' })
    }

    siginHandler = () => {

    }

    componentDidMount() {
        localStorage.clear();
        localStorage.setItem('admin','segio@gmail.com');
    }


    render() {
        return (
            <header className="header">
                <div className="logo-block">
                    <img src={logo} alt="" className="logo" />
                </div>

                <Nav showPopup={this.loginPopupHandler} />
                <PopUp stylePopup={this.state.stylePopup} close={this.closeLoginPopupHandler} signIn={this.siginHandler} />

            </header>
        );
    }
}

export default Header;