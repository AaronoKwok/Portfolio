const MobileNav = () => {
    return (
        <div className="mobile-navbar">
            <div>
                <button className="mobile-about nav-button">
                    About
                </button>
                <button 
                    className="mobile-resume nav-button"
                    href="https://docs.google.com/document/d/e/2PACX-1vSARu0pcnMQjrXGzXSpmjIYFw8wMrCVNS-EZh4RZpGNEK9t1tc32-xcylaEFLkinTBOo3t-oyM1QgH9/pub" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Resume
                </button>
            </div>
            <hr className="mobile-hr" />
            <div>
                <button
                    className="mobile-linkedin nav-button"
                    href="https://www.linkedin.com/in/aaronkwok1/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </button>
                <button
                    className="mobile-github nav-button"
                    href="https://github.com/AaronoKwok"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </button>
            </div>
        </div>
    )
}

export default MobileNav