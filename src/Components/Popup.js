import React from 'react';
import Modal from 'react-modal';
import projectsData from '../data/projects.json' 

const customStyles = {
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
        height: '80%',
        width: '70%',
        color: 'black',
        borderRadius: '15px'
    },
};

function Popup({ isOpen, id, close }) {
    const { projects } = projectsData

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={close}
                style={customStyles}
                contentLabel="Project Modal"
            >
                <button className="close-modal" onClick={close}>close</button>
                <h1>{projects[id].name}</h1>
                <img className="modal-img" src={projects[id].img} alt="project pic" />
                <p><b>Tech Stack: </b>{projects[id].stack}</p>
                <p><b>Live: </b><a href={projects[id].live} target="_blank" rel="noreferrer">{projects[id].loCase}</a></p>
                <p><b>Code: </b><a href={projects[id].github} target="_blank" rel="noreferrer">Github Repo</a></p>
                <p><b>Description: </b>{projects[id].longDes}</p>
            </Modal>
        </div>
    );
}

export default Popup