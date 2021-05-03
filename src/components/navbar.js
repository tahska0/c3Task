import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './navbar.css';
import { IconContext } from 'react-icons/lib';
import blogo from './Brilliant_Logo.svg';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ) {
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
            {/* <IconContext.Provider values={{ color: '#fff'}}> */}
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}> 
                    {/* <MdFingerprint className='navbar-icon' /> */}
                        <img src={blogo} className='bLogo'/>
                        BRILLIANT
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        { click ? <FaTimes /> :  <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Today
                            </Link>        
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Courses
                            </Link>        
                        </li>
                        <li className="nav-item">
                            <Link to='/' className="nav-links">
                                Practice
                            </Link>        
                        </li>
                        <div className="loginb">
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/log-in' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>LOG IN</Button>
                                </Link>
                            ) : (
                                <Link to='log-in' className='btn-link'>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                        LOG IN
                                    </Button>
                                </Link>
                            )}
                        </li>
                        </div>
                        <div className="signupb">
                        <li className="nav-btn">
                            {button ? (
                                <Link to='/sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                                </Link>
                            ) : (
                                <Link to='sign-up' className='btn-link'>
                                    <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                                        SIGN UP
                                    </Button>
                                </Link>
                            )}
                        </li>
                        </div>
                    </ul>
                </div>
            </div>
            
            
            {/* </IconContext.Provider> */}
        </>
    );
}

export default Navbar
