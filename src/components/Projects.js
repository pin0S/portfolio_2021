import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Projects.scss'
import garachu from '../garachu.jpg'

const projects = [
    {   
        img: 'placeholder',
        name: 'Gratefulness Chrome Extension',
        desc: 'Deployed to Chrome webstore',
        tech: ['JavaScript', 'HTMl', 'CSS']
    },
    {   
        img: 'placeholder',
        name: 'Basketball Card Marketplace',
        desc: 'Deployed to Heroku',
        tech: ['Ruby', 'Ruby on Rails', 'Fullstack']
    },
    {   
        img: 'placeholder',
        name: 'Pokemon Royal Rumble',
        desc: 'Terminal App',
        tech: ['Ruby', 'Terminal']
    },
    {   
        img: 'placeholder',
        name: 'Old Portfolio',
        desc: 'Deployed to Netlify',
        tech: ['HTMl', 'CSS']
    }
];

export default function Projects() {
    return (
        <div>
            <h1 className="line">Projects</h1>
            <div className="projects-container">
                
            <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    scale={1.02}
                >
                    <div className="projects-card">
                        <div className='card-content'>
                            <img src={garachu} alt='Garchu landing page' />
                            <h3>Gratefulness Chrome Extension</h3>
                            <p>Deployed to Chrome webstore</p>
                            <ul className="categories">
                                <li>javascript</li>
                                <li>html</li>
                                <li>css</li>
                            </ul>
                        </div>
                    </div>
                </Tilt>
                
                <Tilt>
                    <div className="projects-card">
                        <div className='card-content'>
                            <p>placeholder img</p>
                            <h3>Basketball Card Marketplace</h3>
                            <p>Deployed to Heroku</p>
                            <ul className="categories">
                                <li>ruby</li>
                                <li>ruby on rails</li>
                                <li>fullstack</li>
                            </ul>
                        </div>
                    </div>
                </Tilt>

                <Tilt 
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}
                >
                    <div className="projects-card">
                        <div className='card-content'>
                            <p>placeholder img</p>
                            <h3>Pokemon Royal Rumble</h3>
                            <p>Terminal App</p>
                            <ul className="categories">
                                <li>ruby</li>
                                <li>terminal</li>
                            </ul>
                        </div>
                    </div>
                </Tilt>

                <Tilt>
                    <div className="projects-card">
                        <div className='card-content'>
                            <p>placeholder img</p>
                            <h3>Old portfolio</h3>
                            <p>Deployed to Netlify</p>
                            <ul className="categories">
                                <li>css</li>
                                <li>html</li>
                            </ul>
                        </div>
                    </div>
                </Tilt>
        
            </div>
        </div>
    
        )
}
