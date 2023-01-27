import React from "react";

export default function Nav() {
    return (
        <div>
            <p className="name">AARON KWOK</p>
            <div className="nav-bar">
                <hr className="hr"/>
                <button className="about-me">
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
            
        </div>
    )
}    