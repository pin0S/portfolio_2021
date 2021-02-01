import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function ProjectCard(props) {
    return (
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            scale={1.2}
        >
            <div className="projects-card">
                <div className="card-content">
                    <div class="img-container">
                        <div class="circle"></div>
                        <img src={props.img} alt={props.alt} />
                    </div>
                    <div className="info">
                    <h3>{props.heading}</h3>
                    <p>{props.desc}</p>
                    <div className="categories">
                        <ul>
                            {props.listItems.map(item => (
                            <li className="tech">{item}</li>
                            ))}
                        </ul>
                    </div>
                    </div>
                    <div className="more">
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </Tilt>
)
}
