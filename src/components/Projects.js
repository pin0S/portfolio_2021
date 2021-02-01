import React from 'react'
import './Projects.scss'
import './ProjectCard'
import ProjectCard from './ProjectCard';

export default function Projects() {
    return (
        <div>
            <h1 className="line">Projects</h1>
            <div className="projects-container">

            <ProjectCard
                img="/garachu.jpg" 
                alt="garachu screenshot"
                heading="Gratefulness Chrome Extension"
                desc="Deployed to Chrome webstore"
                listItems={['HTML', 'CSS', 'JavaScript']}
            />

            <ProjectCard
                img="/garachu.jpg" 
                alt="garachu screenshot"
                heading="Basketball Card Marketplace"
                desc="Deployed to Heroku"
                listItems={['HTML', 'CSS', 'JavaScript', 'Ruby', 'Ruby on Rails']}
            />

            <ProjectCard
                img="/garachu.jpg" 
                alt="garachu screenshot"
                heading="Pokemon Royal Rumble"
                desc="Terminal App"
                listItems={['Ruby', 'Terminal']}
            />

            <ProjectCard
                img="/garachu.jpg" 
                alt="garachu screenshot"
                heading="Old Portfolio"
                desc="Deployed to Netlify"
                listItems={['HTML', 'CSS']}
            />
        
            </div>
        </div>
    
        )
}
