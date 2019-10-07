import React from 'react';

import './Header.css'

class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <div className="layout">
                    <a href="/"><img className="logo" src='./image/Logo.svg' alt="logo" /></a>
                </div>
            </header>
        );
    }
}

export default Header;