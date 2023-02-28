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
                href="https://docs.google.com/document/d/e/2PACX-1vSARu0pcnMQjrXGzXSpmjIYFw8wMrCVNS-EZh4RZpGNEK9t1tc32-xcylaEFLkinTBOo3t-oyM1QgH9/pub" 
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