import React, { useState } from 'react'
import Popup from './Popup'

const ProjectCard = ({ project }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        if (!isOpen) {
            setIsOpen(true) 
        }
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div onClick={handleClick} className="project-card">
            <Popup isOpen={isOpen} id={project.id} close={closeModal}/>
            <p className="project-name">{project.name}</p>
            <img className="project-image" src={project.img} alt="sneak peek"/>
            <p className="project-des">{project.description}</p>
        </div>
    )
}

export default ProjectCard