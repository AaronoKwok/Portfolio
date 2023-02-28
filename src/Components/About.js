import Modal from 'react-modal'; 
import { useWidth } from '../utils/hooks';

const mobileAbout = {
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
        width: '80%',
        maxWidth: '1200px',
        color: 'black',
        borderRadius: '15px',
        border: 'none', 
        backgroundColor: 'rgb(239, 245, 250)'
    },
}

const desktopAbout = {
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
        paddingBottom: '40px',
        maxHeight: '80%',
        width: '80%',
        maxWidth: '1200px',
        color: 'black',
        borderRadius: '15px',
        border: 'none', 
        backgroundColor: 'rgb(239, 245, 250)'
    },
}

const About = ({ isOpen, close }) => {

    const customStyles = (useWidth() > 850) ? desktopAbout : mobileAbout;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Project Modal"
        >
            <button className="close-modal" onClick={close}>
                <p className="close-x">X</p>
            </button>
            <div>
                about me ahah
            </div>
            
        </Modal>
    )
}

export default About