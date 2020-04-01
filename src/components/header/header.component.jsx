import React from 'react';
import { Link } from 'react-router-dom';


import './header.styles.css';

const Header = () => (
    <div className='wrap'>
        <div className='nav-background'>
            <div className='empty'></div>
            <div className='nav-container'>
                <div className='option'><Link to='/'>SHOP</Link></div>
                <div className='option'><Link to='/commissions'>COMMISSIONS</Link></div>
                <div className='option'><Link to='/about'>ABOUT</Link></div>
                <div className='option'><Link to='/contact'>CONTACT</Link></div>
            </div>
            <div className='nav-sign'>
                <div className='option-b'><Link to='/signin'>Sign in or Create Account</Link></div>
            </div>
        </div>
    </div>
)

export default Header;