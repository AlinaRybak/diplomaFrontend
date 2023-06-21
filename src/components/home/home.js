import React from "react";
import './App.css';
import logo from "../../images/logo.png";
import recipe from "../../images/recipe.jpg";
import products from "../../images/products.jpg";
import ButtonProducts from "../buttonProducts/ButtonProducts";
import ButtonRecipe from "../buttonRecipe/ButtonRecipe";


function Home (){

    return <>
    <img className="rounded mx-auto d-block" src={logo} alt="logo" />
    <div className="text-style"><p>At Green Food Brands, our passion lies in crafting delectably nutritious food, beverages, essential cooking ingredients, and beauty products. We are dedicated to sourcing ingredients that are pure, natural, ethical, and sustainable, without any unnecessary additives. </p>
    <p>Our recipes are a harmonious blend of the finest elements from around the globe, featuring fair-trade coconuts from Sri Lanka and aromatic Eastern-inspired curries and spices. Embrace the goodness of nature with our range of wholesome products, precisely as nature intended...</p>
    </div>
    <hr></hr>
    <div className="row">
        <div className="col-md-6 text-left text-title-style">
            <h3 className="pb-3">let's go buying</h3>
            <img className="rounded w-100 pb-3"src={products} alt="products"/>
            <h2 className="pb-3">Introducing our fresh new look!</h2>
            <p className="text-style pb-3">Embracing tradition with a contemporary touch. Experience the wonders of a delightful selection of globally inspired plant-based organic cuisine.</p>
            <ButtonProducts/>
        </div>
        <div className="col-md-6 text-left text-title-style">
        <h3 className="pb-3">let's go cooking</h3>
        <img className="rounded w-100 pb-3" src={recipe} alt="recipe"/>
        <h2 className="pb-3">Ready to go on a culinary adventure?</h2>
        <p className="text-style pb-3">Unearth a delectable and diverse treasure trove of irresistibly mouthwatering recipes artfully crafted by our exceptionally talented in-house chef.</p>
        <ButtonRecipe/>
        </div>
    </div>
    <hr></hr>    
    </>};

export default Home;