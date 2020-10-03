import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
      <>
      <IconContext.Provider value={{ color: '#ffffff' }}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <FaLaptopCode className="navbar-icon" />  
                    REACT WEB!
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/products' className="nav-links" onClick={closeMobileMenu}>
                            PRODUCTS
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/services' className="nav-links" onClick={closeMobileMenu}>
                            SERVICES
                        </Link>
                    </li>

                    <li className="btn-link">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle="btn--outline"> SIGN UP!</Button>
                            </Link>
                        ) : (
                            <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle="btn--outline" buttonSize="btn--mobile"> SIGN UP!</Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
      </>
    );
}

export default Navbar
