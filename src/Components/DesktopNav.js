import React, { useState } from "react"
import About from "./About"

const DesktopNav = () => {

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
        <div className="nav-bar">
            <About isOpen={isOpen} close={closeModal} />
            <hr className="hr"/>
            <button className="about-me" onClick={handleClick}>
                About
            </button>
            <a 
                className="link middle-link"
                href="https://drive.google.com/file/d/17_RHrqiazOnvGkQFLETHBw6Nnq5BRxfX/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer"
            >
                Resume
            </a>
            <a
                className="link middle-link"
                href="https://www.linkedin.com/in/aaronkwok1/"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn
            </a>
            <a
                className="link last-link"
                href="https://github.com/AaronoKwok"
                target="_blank"
                rel="noreferrer"
            >
                Github
            </a>
            <hr className="hr"/>
        </div>
    )
}

export default DesktopNav