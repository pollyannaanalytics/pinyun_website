import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>

                <div className='experience__career'>
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__detail'>

                            <div className='item1'>
                                <BsFillPatchCheckFill className='experience__detail-icon' />
                                <h4>HTML</h4>
                                <small className='text-light'>HTML 5</small>
                            </div>


                            <div className='item2'>
                                <BsFillPatchCheckFill className='expe`rience__detail-icon' />
                                <h4>CSS</h4>
                                <small className='text-light'>CSS3</small>
                            </div>

                            <div className='item3'>
                                <BsFillPatchCheckFill className='experience__detail-icon' />
                                <h4>Javascript</h4>
                                <small className='text-light'>ES5, ES6</small>
                            </div>

                            <div className='item4'>
                                <BsFillPatchCheckFill className='experience__detail-icon' />
                                <h4>React</h4>
                                <small className='text-light'>Hook</small>
                            </div>
                        </article>

                    </div>
                </div>
                <div className='experience__career'>

                    <h3>Quality Assurance</h3>
                    <div className="experience__content">
                        <article className='experience__detail'>
                            <div>
                                <BsFillPatchCheckFill />

                                <h4>Python</h4>
                                <small className='text-light'>Selenium</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Postman</h4>
                                <small className='text-light'>Automation</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Swagger</h4>
                                <small className='text-light'>API testing</small>
                            </div>
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>JIRA</h4>
                                <small className='text-light'>Scrum Dev.</small>
                            </div>

                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience