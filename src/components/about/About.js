import React, { useEffect, useRef, useState } from "react";
import './App.css';
import logo from '../../images/logo.png';
import brand1 from '../../images/brand1.png';
import brand2 from '../../images/brand2.png';
import brand3 from '../../images/brand3.png';
import brand4 from '../../images/brand4.png';
import brand5 from '../../images/brand5.png';
import brand6 from '../../images/brand6.png';
import brand7 from '../../images/brand7.png';
import brand8 from '../../images/brand8.png';
import brand9 from '../../images/brand9.png';
import brand10 from '../../images/brand10.png';
import brand11 from '../../images/brand11.png';
import bannerAbout from '../../images/bannerAbout.jpg'
import { Button } from "react-bootstrap";

function About(){
    const [user, setUser] = useState({});

    useEffect(()=>{
        let savedUser = localStorage.getItem('user');
        if(savedUser){
            savedUser = JSON.parse(savedUser);
            setUser(savedUser);
        }
    },[])

   const loginRef = useRef(null);
   const emailRef = useRef(null);
   const phoneRef = useRef(null);

    function submitUser(){
        let newUser = {loginRef: loginRef.current.value, emailRef: emailRef.current.value,  phoneRef:phoneRef.current.value};
        localStorage.setItem('user', JSON.stringify(newUser));
        setUser(newUser);
    }

    return <>
    <img className="rounded mx-auto d-block" src={logo} alt="logo" />
    <div className="text-about">
    <p>Green Food Brands is part of the Healthy Group Sale which has been helping companies develop successful natural food and drink brands for around 1 years. Launched, and still run by Lyis Moss, Green Food Brands continues to produce and distribute organic, innovative and delicious ingredients, condiments, meals and drinks as well as natural ethical beauty products.</p> 
    <p>At the forefront of catering to consumers’ needs and aspirations, all of our own brands are manufactured and produced in our own American Retail Consortium approved and Soil Association Organic certified factory.</p> 
    </div>
    <img className="img-fluid mb-3" src={bannerAbout} alt="bannerAbout" />
    <div className="text-about">
    <h3 className="text-center">A lifetime of natural products experience to bring into the future</h3>
    <p>Headed by Lyis Moss, who has previously held senior director positions in a number of companies including Green & Blacks and Whole Earth Foods, the Green Sales Group team is enhanced by key personnel who have all held senior positions in the sector. It is the experience of the whole team that enables us to continually grow in a competitive market.</p>
    <p>The Green Sales Group is able to offer everything from sales representation through to the fully integrated importation and distribution for both new and existing brands in the UK.</p>
    <p>Most of the brands that we represent are among the leading brands within their category. This runs consistently through our long established portfolio. We don’t work with competing brands, and we are selective about who we do work with. All our partner brands have the quality and ethical attributes to enable us to sell with Confidence to the USA market.</p>
    </div>
    <h1 className="text-about-brand text-center">Brand Portfolio:</h1>
    <div className="row justify-content-center">
        <a href="https://healthybrand.mx/" ><img className="m-3 custom-border" src={brand1} alt="brand1"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand2} alt="brand2"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand3} alt="brand3"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand4} alt="brand4"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand5} alt="brand5"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand6} alt="brand6"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand7} alt="brand7"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand8} alt="brand8"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand9} alt="brand9"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand10} alt="brand10"/></a>
        <a href="https://healthybrand.mx/"><img className="m-3  custom-border" src={brand11} alt="brand11"/></a>
    </div>
    <h3 className="mb-2 mt-3 text-about-brand  text-center">Become part of our green family:</h3>
    <div className="text-about text-center"><p>If you are a consumer and are looking for stockists details, FAQs or any other info on our brands and their products, </p><p>please complete the below.</p></div>
    <input ref = {loginRef} defaultValue={user.login} className="form-control mb-3" type={'text'} placeholder = {'Enter login'}/>
    <input ref={emailRef} defaultValue={user.email} className="form-control mb-3" type={'email'} placeholder = {'Enter email'}/>
    <input ref={phoneRef} defaultValue={user.phone} className="form-control mb-3" type={'tel'} placeholder = {'Enter your phone'}/>
    <Button variant = {'success'} onClick={submitUser}>Submit</Button>
    </>
}

export default About;