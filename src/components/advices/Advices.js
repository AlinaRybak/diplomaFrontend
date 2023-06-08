import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import logo from "../../images/logo.png";



function Advices (){

  const [advices, setAdvices] = useState([]);

  useEffect(() => {
      fetch('/api/advices')
          .then(response => response.json())
          .then(data => setAdvices(data))
          .catch(error => console.error('Error:', error));
  }, []);

    return <>
    <img className="rounded mx-auto d-block" src={logo} alt="logo" />
    <div className="text-style"><p>At Green Food Brands, our passion lies in crafting delectably nutritious food, beverages, essential cooking ingredients, and beauty products. We are dedicated to sourcing ingredients that are pure, natural, ethical, and sustainable, without any unnecessary additives. </p>
    <p>Our recipes are a harmonious blend of the finest elements from around the globe, featuring fair-trade coconuts from Sri Lanka and aromatic Eastern-inspired curries and spices. Embrace the goodness of nature with our range of wholesome products, precisely as nature intended...</p>
    </div>
    <h3 className="text-center text-title-style">Think healthy</h3>
    <div>
            {advices.map(advice => (
                <div key={advice.id}>
                    <img src={advice.image} alt="Advice Image"/>
                    <h3>{advice.title}</h3>
                    <p>{advice.text}</p>
                </div>
            ))}
        </div>
    
    </>};

export default Advices;