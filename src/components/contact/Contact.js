import React from "react";
import "./App.css";

function Contact(){
    return<div className="text-center">
        <p>Need help with an existing order you've placed? <p>Contact us at <a href="malto: info@greenfood.com" className="contact-style">info@greenfood.com.</a></p></p>
        <p>Questions on shipping costs or best shipping to choose for both domestic orders? <p>Contact us at <a href="malto: info@greenfood.com" className="contact-style">info@greenfood.com</a> for details.</p></p>
        <p>For general product questions, product suggestions, ordering questions, marketing, or other information, <p>please write us at <a href="malto: info@greenfood.com" className="contact-style">info@greenfood.com.</a></p></p>
        <p>Want to give us a call?  Please try us at either of the numbers below: <a href="tel: +112312312323" className="contact-style">(123)123-123-23.</a></p>
        <div>
        <p className="pb-0">Or visit our office:</p>
        <p className="adress-style">Ukraine</p>
        <p className="adress-style">Kyiv</p>
        <p className="adress-style">str. Kyivska, 1</p>
        </div>
    </div>
}

export default Contact;