import React from 'react';
import { Facebook, Instagram, Youtube } from 'react-bootstrap-icons';
import './footer.css';

function FooterContainer() {
    return (
        <div className="page-width">
            <footer className="footer">
                <ul className="footer-nav">
                    <li className="nav-item">
                    <h2 className="nav-title">Our Pages</h2>

                    <ul className="nav-ul">
                        <li>
                        <a href="/cart">Cart</a>
                        </li>

                        <li>
                        <a href="#sample">Print</a>
                        </li>
                    </ul>
                    </li>
                    
                    <li className="nav-item">
                    <h2 className="nav-title">Media</h2>

                    <ul className="nav-ul">
                        <li>
                        <a href="https://www.youtube.com/" target="_blank">Youtube</a>
                        </li>

                        <li>
                        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                        </li>
                            
                        <li>
                        <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                        </li>
                    </ul>
                    </li>
                    
                    <li className="nav-item">
                    <h2 className="nav-title">Legal</h2>
                    
                    <ul className="nav-ul">
                        <li>
                        <a href="/disclaimer">Disclaimer</a>
                        </li>
                        
                        <li>
                        <a href="/termsAndConditions">Terms And Conditions</a>
                        </li>
                        
                        <li>
                        <a href="/privacyPolicy">Privacy Policy</a>
                        </li>
                    </ul>
                    </li>
                </ul>
                <div className="footer-addr">
                    <h1 className="footer-logo">Little Tags</h1>
                        
                    <h2>Contact</h2>
                    
                    <address>
                    5534 Somewhere In. The World 22193-10212<br />
                    </address>
                    <div className="social-icons">
                        <Facebook />
                        <Instagram />
                        <Youtube />
                    </div>                    
                </div>
                <div className="legal">
                    <p>&copy; 2021 Something. All rights reserved.</p>
                    
                    <div className="legal-links">
                    <span>Made with <span className="heart">♥</span> by Vatsal, Ajinkya and Amanjot</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default FooterContainer;
