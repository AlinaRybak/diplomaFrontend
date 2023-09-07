import React from "react";
import "./App.css";
import avocado from "../../images/avocado.jpg";
import meat from "../../images/meat.jpg";
import jack from "../../images/jackfruit.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom";

function NewsContainer(){
    return<div>
    <div className="row">
        <div className="col-md-4 text-left">
        <img className="rounded w-100 pb-3"src={meat} alt="meat"/>
        <h3 className="pb-3 title-style">3D-printed meat: The future of dining</h3>
        <p>Innovative technology revolutionizing protein consumption with sustainability and customization.</p>
        <Link to="/ArticleTwo" className="link-style">Read more...</Link>
    </div>
    <div className="col-md-4 text-left">
        <img className="rounded w-100 pb-3" src={avocado} alt="avocado"/>
        <h3 className="pb-3 title-style"> Avocado Innovation: Elevating Vegetarian Cuisine</h3>
        <p>Explore the Avocado Innovation: From versatile culinary uses to its exceptional nutritional profile, discover how avocados are redefining vegetarian dining.</p>
        <Link to="/ArticleThree" className="link-style">Read more...</Link>
    </div>
    <div className="col-md-4 text-left">
        <img className="rounded w-100 pb-3" src={jack} alt="jack fruit"/>
        <h3 className="pb-3 title-style">Jackfruit: A Plant-Powered Delight</h3>
        <p>Discover how this tropical fruit is reshaping vegetarian cuisine with its adaptability and potential to create mouthwatering dishes that satisfy even the most discerning palates.</p>
        <Link to="/ArticleFour" className="link-style">Read more...</Link>
    </div>
    </div>
    <hr></hr>
    </div>
}

export default NewsContainer;