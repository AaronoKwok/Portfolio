import React, { useState } from 'react'
import Popup from './Popup'

const ProjectCard = ({ project }) => {

    const { id, name, img, description } = project

    console.log(project)

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
            <Popup isOpen={isOpen} id={id} close={closeModal}/>
            <p className="project-name">{name}</p>
            <img className="project-image" src={img} alt="sneak peek"/>
            <p className="project-des">{description}</p>
        </div>
    )
}

export default ProjectCard