import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';    
import {Button} from './Button';
import './Button.css'

function Footer() {

    const socialIcon = [
        {
            className:'social-icons-links facebook',
            to:'/' ,
            target:'_blank' ,
            ariaLabel:'Facebook',
            itemClass: "fab fa-facebook-f",
        },
        {
            className:'social-icons-links instagram',
            to:'/',
            target:'_blank',
            ariaLabel:'Instagram',
            itemClass:'fab fa-instagram'
        },
        {
            className:'social-icons-links youtube',
            to:'/' ,
            target:'_blank', 
            ariaLabel:'Youtube',
            itemClass:"fab fa-youtube",
        },
        {
            className:'social-icons-links twitter',
            to:'/' ,
            target:'_blank', 
            ariaLabel:'Twitter',
            itemClass:"fab fa-twitter",
        },
        {
            className:'social-icons-links linkedin',
            to:'/' ,
            target:'_blank', 
            ariaLabel:'Linkedin',
            itemClass:"fab fa-linkedin",
        },
    ]
    const footerItem = [
        {
            className:"footer-link-items",
            h2Text:"Contact Us",
            linkText1:"Contact",
            to1:"/",
            linkText2:"Support",
            to2:"/",
            linkText3:"Destinations",
            to3:"/",
            linkText4:"Sponsorships",
            to4:"/",
        },
        {
            className:"footer-link-items",
            h2Text:"Videos",
            linkText1:"Submit Video",
            to1:"/",
            linkText2:"Ambassadors",
            to2:"/",
            linkText3:"Agency",
            to3:"/",
            linkText4:"Influencer",
            to4:"/",
        },
        {
            className:"footer-link-items",
            h2Text:"Social Media",
            linkText1:"Instagram",
            to1:"/",
            linkText2:"Facebook",
            to2:"/",
            linkText3:"Twitter",
            to3:"/",
            linkText4:"YouTube",
            to4:"/",
        },
    ]
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
                    {footerItem.map((item, sa) => (
                    <div key={(() => `${sa}`)()} className={item.className}>
                        <h2>{item.h2Text}</h2>
                        <Link to={item.to1}>{item.linkText1}</Link>
                        <Link to={item.to2}>{item.linkText2}</Link>
                        <Link to={item.to3}>{item.linkText3}</Link>
                        <Link to={item.to4}>{item.linkText4}</Link>
                    </div>
                    ))}                    
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
                        {socialIcon.map((item, ix) => (
                            <Link key={(() => `${ix}`)()} 
                            className={item.className}
                            aria-label={item.ariaLabel}
                            target={item.target}
                            to={item.to}>
                                <i className={item.itemClass}></i>
                            </Link>      
                        ))}                        
                    </div>                    
                </div>                
            </section>
        </div>
    )
}

export default Footer
