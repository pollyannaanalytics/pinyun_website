import React from 'react'
import './about.css'
import life from '../../asset/lifephoto.png'
const About = () => {
    return (
        <section id='about'>

            <h5>Get to Know</h5>
            <h2>About Pin-Yun</h2>

            <div className='container about__container'>

                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={life} alt="about__life" />
                    </div>
                </div>

                <div className='about__content'>
                    <p>
                        Hi, This is PinYun, You can call me PY as well.
                        <br />
                        As an ambitious recent graduate, I possess proficiency in JS, Python, React, CSS, and SQL.
                        I am skilled in leveraging technology to design visually appealing and user-friendly web applications.
                        With a continuous focus on enhancing my frontend development skills, I am actively seeking opportunities to contribute to innovative projects as a Frontend Developer.
                    </p>
                    <div className="contact__btn">
                        <a href="#contact" className='btn'>Let's Talk</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About