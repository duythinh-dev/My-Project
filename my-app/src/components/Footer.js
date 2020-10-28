import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';    
import {Button} from './Button';
import './Button.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure news letter to receive our best vacation deals.    
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="Your email" className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button> 
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>YouTube</Link>
                    </div>
                </div>                
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className="social-logo">
                            TRVL <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small className='website-rights'>TRVL x 2020</small>
                    <div className='social-icons'>
                        <Link className='social-icons-links facebook'
                         to='/' 
                         target='_blank' 
                         aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icons-links instagram'
                         to='/' 
                         target='_blank' 
                         aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icons-links youtube'
                         to='/' 
                         target='_blank' 
                         aria-label='Youtube'>
                            <i className='fab fa-youtube'></i>
                        </Link>
                        <Link className='social-icons-links twitter'
                         to='/' 
                         target='_blank' 
                         aria-label='Twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link className='social-icons-links linkedin'
                         to='/' 
                         target='_blank' 
                         aria-label='Linkedin'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>                    
                </div>                
            </section>
        </div>
    )
}

export default Footer
