import React, { useState } from "react"
import About from "./About"

const MobileNav = () => {

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
        <div className="mobile-navbar">
            <About isOpen={isOpen} close={closeModal} />
            <div>
                <button className="mobile-about nav-button-color" onClick={handleClick}>
                    About
                </button>
                <a 
                    className="mobile-resume nav-button-color nav-link"
                    href="https://docs.google.com/document/d/e/2PACX-1vSARu0pcnMQjrXGzXSpmjIYFw8wMrCVNS-EZh4RZpGNEK9t1tc32-xcylaEFLkinTBOo3t-oyM1QgH9/pub" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Resume
                </a>
            </div>
            <hr className="mobile-hr" />
            <div>
                <a
                    className="mobile-linkedin nav-button-color nav-link"
                    href="https://www.linkedin.com/in/aaronkwok1/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    className="mobile-github nav-button-color nav-link"
                    href="https://github.com/AaronoKwok"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
            </div>
        </div>
    )
}

export default MobileNav