import React from 'react';
import Modal from 'react-modal';
import projectsData from '../data/projects.json' 
import { useWidth } from '../utils/hooks';

const mobilePopup = {
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

const desktopPopup = {
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

function Popup({ isOpen, id, close }) {

    const customStyles = (useWidth() > 850) ? desktopPopup : mobilePopup;
    const { projects } = projectsData

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Project Modal"
        >
            <button className="close-modal" onClick={close}>X</button>
            <h1 className="modal-h1">{projects[id].name}</h1>
            <div className="modal-container">
                <img className="modal-img" src={projects[id].img} alt="project pic" />
                <div className="modal-des">
                    <p><b>Tech Stack: </b>{projects[id].stack}</p>
                    <p><b>Live: </b><a href={projects[id].live} target="_blank" rel="noreferrer">{projects[id].loCase}</a></p>
                    <p><b>Code: </b><a href={projects[id].github} target="_blank" rel="noreferrer">Github Repo</a></p>
                    <p><b>Description: </b>{projects[id].longDes}</p>
                </div>
            </div>
        </Modal>
    );
}

export default Popup