import React from 'react'
import projectsData from '../data/projects.json' 
import ProjectCard from './ProjectCard'

function Projects() {

    const projects = projectsData.projects.map((project) => {
        return  <ProjectCard project={project} id={project.id} key={project.id}/>
    })

    return (
        <div>
            <p className="projects">PROJECTS</p>
            <div className="projects-container">
                {projects}
            </div>
        </div>
    )
}

export default Projects