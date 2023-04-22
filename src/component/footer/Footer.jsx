import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillMediumCircle } from 'react-icons/ai'
import '../footer/footer.css'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>PIN-YUN WU</a>
            <div className='footer__socials'>
                <a href="https://www.facebook.com/profile.php?id=100011124549946"><AiFillFacebook /></a>
                <a href="https://www.linkedin.com/in/pin-yun-wu-1aab06231/"><AiFillLinkedin /></a>
                <a href="https://frontendpollyanna.medium.com/"><AiFillMediumCircle /></a>
            </div>
            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
        </footer>
    )
}

export default Footer