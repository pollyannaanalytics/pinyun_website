import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../asset/profolio_pinyun.png'
import HeaderSocial from './HeaderSocial';
const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <h5>Hello, World</h5>
                <h1>Pin-Yun Wu</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className='me'>
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>

    )
};

export default Header;