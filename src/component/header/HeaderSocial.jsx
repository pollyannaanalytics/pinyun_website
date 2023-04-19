import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillMediumCircle } from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
      <a href="https://www.linkedin.com/in/pin-yun-wu-1aab06231/" target="_blank"><AiFillLinkedin /></a>
      <a href="https://github.com/pollyannaanalytics" target="_blank"><AiFillGithub /></a>
      <a href="https://frontendpollyanna.medium.com/" target="_blank"><AiFillMediumCircle /></a>
    </div>
  )
}

export default HeaderSocial