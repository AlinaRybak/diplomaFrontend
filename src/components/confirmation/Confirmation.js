import React from "react";
import greenVege from "../../images/green-vege.jpg";
import "./App.css";

function Confirmation(){
    return<>
    <h2 className="text-center mt-3 text-style">Thank you very much for your order! 
    <p>In the near future, our operators will contact you to clarify the order. 
        <p>See you soon!</p></p></h2>
        <img className="img-fluid mt-3" src={greenVege} alt="green-vege"/>
    </>
}

export default Confirmation;