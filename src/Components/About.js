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
                        - Currently seeking positions related to business and customer care / service.
                    </p>
                </p>
            </section>
        </Modal>
    )
}

export default About