import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
import { Modal } from "react-bootstrap";
import RegistrationForm from "../registrationForm/RegistrationForm";

function ButtonLogin(){

    const [showRegistrationModal, setShowRegistrationModal] = useState(false);

    const toggleRegistrationModal = () => {
        setShowRegistrationModal(!showRegistrationModal);
    }

    return<div>
        <button className="btn-login" onClick={toggleRegistrationModal}>
            <FontAwesomeIcon icon={faUser} className='icon-user'/>
        </button>

        <Modal show={showRegistrationModal} onHide={toggleRegistrationModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Registration Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RegistrationForm onClose={toggleRegistrationModal} />
                </Modal.Body>
            </Modal>
    </div>
}

export default ButtonLogin;