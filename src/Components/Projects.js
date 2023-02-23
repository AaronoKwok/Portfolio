import React from 'react'
import projectsData from '../data/projects.json' 

function Projects() {

    const projects = projectsData.projects.map((project) => {
        
        return  <div className="project-card" key={project.id}>
                    <p className="project-name">{project.name}</p>
                    <img className="project-image" src={project.img} alt="sneak peek"/>
                    <p className="project-des">{project.description}</p>
                </div>
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