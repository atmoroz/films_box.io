import React from 'react';
import { Link } from "react-router-dom";

import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <div className="footer_item layout">
                    <div className="footer_menu">
                        <div className="footer_logo">
                            <Link to={'/'} className="footer_logo__link" >
                                <img className="footer_logo__img" src="/image/footer_logo.svg" alt="logo"/>
                            </Link>
                        </div>
                        <div className="footer_link">
                            <Link to="/">About</Link>
                            <Link to="/">Movies</Link>
                            <Link to="/">Rating</Link>
                            <Link to="/">Contact</Link>
                        </div>
                    </div>
                    <hr/>
                    <div className="footer_content">
                        <div className="footer_autor">Designed by Milan Houter. All rights reserved.</div>
                        <div className="footer_social">
                            <Link className="footer_social__link" to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="footer_social__link" to="/"><i className="fab fa-pinterest-p"></i></Link>
                            <Link className="footer_social__link" to="/"><i className="fab fa-twitter"></i></Link>
                            <Link className="footer_social__link" to="/"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;