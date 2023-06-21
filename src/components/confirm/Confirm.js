import React from "react";
import cooperation from "../../images/cooperation.jpg";
import "./App.css";

function Confirm(){
    return<>
    <div className="text-center mt-5 text-style">
        <p>We would like to express our sincere gratitude for considering cooperation with our company. We appreciate your interest and trust in our services.</p>
        <p>Thank you for choosing us as your potential partner. We assure you that we are committed to delivering high-quality solutions and meeting your requirements.</p>
        <p>Our dedicated team is eager to discuss the details of our collaboration further. One of our managers will contact you shortly to provide you with more information, answer questions, and address any concerns you may have. Rest assured, we are here to assist you.</p>
        <p>Once again, thank you for your interest, and we look forward to the opportunity to work together!</p>
        <img className="img-fluid mt-3" src={cooperation} alt="cooperation"/>
    </div>
    </>
}

export default Confirm;