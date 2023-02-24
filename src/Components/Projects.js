import React from 'react'
import projectsData from '../data/projects.json' 
import ProjectCard from './ProjectCard'
import { useWidth } from '../utils/hooks' 

function Projects() {

    const mobileProjects = 'mobile cards here'

    const desktopProjects = projectsData.projects.map((project) => {
        return  <ProjectCard project={project} id={project.id} key={project.id}/>
    })

    return (
        <div>
            <p className="projects">PROJECTS</p>
            {(useWidth() < 850) ? 
                <div className="mobile-projects-container">
                    {mobileProjects}
                </div>
                : 
                <div className="desktop-projects-container">
                    {desktopProjects}
                </div>
            }
        </div>
    )
}

export default Projects