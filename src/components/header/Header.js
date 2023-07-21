import './App.css';
import React from "react";

function Header(){
    return <>
       <header className="header">
      <div className="top d-flex justify-content-around align-items-end">
        <div className="logo">GreenFoodBrands</div>
        <div className="logo contact-info">Call us: (123)123-123-23, (123)123-123-24</div>
        <div class="row">
      <a class="social-icon float-left social-icon-facebook text-white" href="https://www.facebook.com/" aria-label="Виконати дію">t</a>
      <a class="social-icon float-left social-icon-linkedin text-white" href="https://www.linkedin.com/" aria-label="Виконати дію">t</a>
      <a class="social-icon float-left social-icon-skype text-white" href="https://www.skype.com/"aria-label="Виконати дію">t</a>
    </div>
      </div>
      <div className='bg-banner'></div>
    </header>
    </>
}

export default Header;