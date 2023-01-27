import React from 'react'
import projectsData from '../data/projects.json' 

function Projects() {

    const projects = projectsData.projects.map((project) => {
        return  <div className="project-card">
                    <p className="project-name">{project.name}</p>
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