import React from 'react'
import './Styles/About.scss'

export default function About() {
    return (
        <div>
            <h1>About Me</h1>
            
            <div className='about-container'>

                <div className='about-img'>
                    <img src={'/resume.jpg'} alt={'peter lynch in human form'} />
                </div>

                <div className="about-info">
                    <section className='card'>
                        <h3>Education</h3>    
                        <p>Diploma of IT | Coder Academy Sydney | 2021</p>
                        <p>Masters of Marketing | RMIT | 2015</p>
                        <p>Bachelors International Business | RMIT | 2013</p>
                    </section>

                    <section className='card'>
                        <h3>Experience</h3>
                        <p>Brand Manager | Unilever | 2018 - 2020 |</p>
                        <p>Category Manager | Unilever | 2017 - 2018 |</p>
                        <p>Consultant | Forethought | 2016 - 2017 |</p>
                    </section>

                    <section className='card'>
                        <h3>Hobbies</h3>
                        <p>🏀 Basketball</p>
                        <p>🥾 Hiking</p>
                        <p>🧑‍🌾 Gardening</p>
                        <p>🐕 Volunteer Rescue Dog Walking</p>
                        <p>🎮 Video Games</p>
                    </section>
                </div>
            </div>
        </div>
        )
}
