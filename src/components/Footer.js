import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subcription">
              <p className="footer-subcription-heading">
                  join the Adventure</p>  
              <p className="footer-subcription-text">
                  Unsubcribe anytimw</p>  
                  <div className="input-areas">
                     <form>
                     <input type="email" name="email" 
                     placeholder="Your Email" className="footer-input" />
                     <Button buttonStyle="btn--outline">Subcribe</Button>     
                    </form> 
                  </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonial</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonial</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonial</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonial</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                           TRVL <i className="fab fa-typo3"></i> 
                        </Link>
                    </div>
                    <small className="website-rights">TRVl 2020</small>
                     <div className="social-icons">
                         <Link className="social-icon-link facebook">
                           <i className="fab fa-facebook-f"
                           to='/'
                           target='_blank'
                           aria-label='facebook' />
                         </Link>
                         
                         <Link className="social-icon-link instagram">
                           <i className="fab fa-instagram"
                           to='/'
                           target='_blank'
                           aria-label='instagram' />
                         </Link>
                         </div>               
                </div>
            </section>
        </div>
    )
}

export default Footer
