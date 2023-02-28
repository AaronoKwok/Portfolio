import React, { useEffect, useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import projectsData from '../data/projects.json' 
import ProjectCard from './ProjectCard'
import { useWidth } from '../utils/hooks' 

function Projects() {

    let [currentProj, setCurrentProj] = useState(0)

    console.log("projects", currentProj)
    

    const handleClick = (dir) => {
        if (dir === 'back' && currentProj > 0) {
            setCurrentProj(currentProj - 1)
        } else if (dir === 'next' && currentProj < projectsData.projects.length - 1) {
            setCurrentProj(currentProj + 1)
        }
    }

    const desktopProjects = projectsData.projects.map((project) => {
        return  <ProjectCard project={project} id={project.id} key={project.id}/>
    })

    useEffect(() => {
        console.log("effect ran")
    }, [currentProj])

    return (
        <div>
            <p className="projects">PROJECTS</p>
            {
                (useWidth() < 850) ? 
                <div className="mobile-projects-container">
                    <IoIosArrowBack size={'3em'} className="arrow" onClick={() => handleClick('back')} />
                    <ProjectCard project={projectsData.projects[currentProj]} />
                    <IoIosArrowForward size={'3em'} className="arrow" onClick={() => handleClick('next')} /> 
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