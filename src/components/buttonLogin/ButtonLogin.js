import React from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function ButtonLogin(){

    const history = useHistory();

    const handleLoginClick = () => {
        history.push("/login");
    };

    return<div>
        <button to="/login" className="btn-login" onClick={handleLoginClick}>
            <FontAwesomeIcon icon={faUser} className='icon-user'/>
        </button>
    </div>
}

export default ButtonLogin;