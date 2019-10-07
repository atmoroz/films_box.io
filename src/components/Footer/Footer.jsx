import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <footer className='footer'>
                <div className="footer_item layout">
                    <div className="footer_menu">
                        <div className="footer_logo">
                            <a className="footer_logo__link" href="/">
                                <img className="footer_logo__img" src="/image/footer_logo.svg" alt="logo"/>
                            </a>
                        </div>
                        <div className="footer_link">
                            <a href="/">About</a>
                            <a href="/">Movies</a>
                            <a href="/">Rating</a>
                            <a href="/">Contact</a>
                        </div>
                    </div>
                    <hr/>
                    <div className="footer_content">
                        <div className="footer_autor">Designed by Milan Houter. All rights reserved.</div>
                        <div className="footer_social">
                            <a className="footer_social__link" href="/"><i className="fab fa-facebook-f"></i></a>
                            <a className="footer_social__link" href="/"><i className="fab fa-pinterest-p"></i></a>
                            <a className="footer_social__link" href="/"><i className="fab fa-twitter"></i></a>
                            <a className="footer_social__link" href="/"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;