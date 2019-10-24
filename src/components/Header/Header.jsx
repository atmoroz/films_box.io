import React from 'react';
import { Link } from "react-router-dom";

import './Header.css'

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <div className="layout">
                    <Link to="/"><img className="logo" src='../image/Logo.svg' alt="logo" /></Link>
                </div>
            </header>
        );
    }
}

export default Header;