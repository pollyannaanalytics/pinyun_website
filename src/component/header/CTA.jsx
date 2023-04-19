import React from 'react'
import PinYun_CV from '../../asset/PinYunWu_CV.pdf'
const CTA = () => {
    return (
        <div className='cta'>
            <a href={PinYun_CV} download className='btn'>Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA
