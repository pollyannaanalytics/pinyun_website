import React from 'react'
import PinYun_CV from '/Users/pollyannawu/Desktop/SideProject/personal-website-main/src/asset/Pin-Yun Wu 中文履歷.pdf'
const CTA = () => {
    return (
        <div className='cta'>
            <a href={PinYun_CV} download className='btn'>Resume</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA
