import React from 'react';
import './Footer.css';
import { Button } from '../../../Button';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <p className='footer-subscription-text'>
          Lorem ipsum...
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Type your E-mail...'
            />
            <Button buttonStyle='btn--outline'>SUBSRIBE!</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
          </div>
          <div className='footer-link-items'>
            <h2>CONTACT!</h2>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>VIDEOS!</h2>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
            <Link to='/'>Lorem ipsum...</Link>
          </div>
          <div className='footer-link-items'>
            <h2>SOCIAL MEDIA!</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaLaptopCode className='navbar-icon' />
              REACT WEB
            </Link>
          </div>
          <small className='website-rights'>PRWN90 © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                ''
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;