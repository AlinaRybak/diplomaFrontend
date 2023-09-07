import './App.css';
import React from "react";
import logo from "../../images/logo.png"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import ButtonLogin from '../buttonLogin/ButtonLogin';


function Header(){

  const history = useHistory();

  const handleLogoClick = () =>{
    history.push('/');
  }

  return (
    <>
      <header>
        <div className="top d-flex justify-content-between align-items-center logoName ">
          <div className="logo" onClick={handleLogoClick}>
            <img src={logo} alt='logo' className='logo-style' />GreenFoodBrands
          </div>
          <div className="logo contact-info d-flex mb-1 mx-5 align-items-center">
            <div href="tel: +11212312323">Call us: (123)123-123-23</div>
            <div className='btn-login'><ButtonLogin/></div>
          </div>
        </div>
        <div className='bg-banner'></div>
      </header>
    </>
  );  
}

export default Header;