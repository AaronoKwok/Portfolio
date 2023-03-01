import Modal from 'react-modal'; 
import { IoClose } from 'react-icons/io5'
import { useWidth } from '../utils/hooks'
import profile from '../assets/images/profile.jpg'

const mobileStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.44)'
    },
    content: {
        position: 'relative',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        paddingTop: '15px',
        maxHeight: '80%',
        width: '90%',
        maxWidth: '1200px',
        color: 'black',
        borderRadius: '15px',
        border: 'none', 
        backgroundColor: 'rgb(239, 245, 250)'
    },
}

const desktopStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.44)'
    },
    content: {
        position: 'relative',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        maxHeight: '80%',
        width: '40%',
        maxWidth: '1200px',
        color: 'black',
        borderRadius: '15px',
        border: 'none', 
        backgroundColor: 'rgb(239, 245, 250)'
    },
}

const About = ({ isOpen, close }) => {

    const customStyles = (useWidth() >= 850) ? desktopStyles : mobileStyles
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Project Modal"
        >
            <IoClose size={'2em'} className="close-modal" onClick={close}/>
            <section>
                <h2 className='about-name'>Hey! It's Aaron!</h2>
                <img className="profile-pic" src={profile} alt="profile" />
                <p className="about-des">
                    <p>
                       As a frontend developer, I enjoy turning ideas into reality and have a passion for making user-friendly, responsive applications that can gather data and display it in creative ways! 
                    </p>
                    <p>
                       For the majority of my adult life, I thought I wanted to become an occupational or physical therapist. After graduating from college, I worked as an aide at a physical therapy clinic to accrue hours and experience for PT school. However, although I enjoyed helping people achieve their goals through rehab, I felt like there was something missing. It was during my search to fulfill this sense of lacking that I came across software development. 
                    </p>
                    <p>
                       Seeing my first “Hello, World!” display on my screen sparked an interest that I hadn’t felt in a while. I saw that the creative aspect of software development was the fulfillment I was searching for! Whether it’s solving a problem using JavaScript or making a component appear correctly onscreen, it felt empowering to use code to build applications that behaved similarly to websites I interacted with everyday. Creating dynamic and responsive interfaces is something I’ve come to enjoy and my passion for it can be found in the projects I’ve displayed on this site. 
                    </p>
                    <p>
                       My current stack is: JavaScript, React, Redux, jQuery, Bootstrap, HTML, CSS, Git/GitHub, and Figma. At the moment, I am learning the MERN stack. In the future, I hope to continue growing my coding abilities in an enthusiastic environment that fosters and promotes continuous learning! 
                    </p>
                    <p>
                       I am currently seeking entry-level frontend developer positions.  
                    </p>
                </p>
            </section>
        </Modal>
    )
}

export default About