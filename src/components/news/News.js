import React from "react";
import "./App.css";
import vegges from "../../images/veggies.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function News (){
    return <div>
    <div className="d-flex justify-content-between">
<div className="w-50 px-3">
    <img src={vegges} alt="vege people" className="rounded w-100 "/>
</div>
<div className="w-50">
    <h3 className="pb-3 title-style">Revolutionizing Nutrition: The Modern Vegan Lifestyle</h3>
    <p>Discover the transformative power of the modern vegan diet as we delve into its revolutionary approach to nutrition and sustainability. Uncover the latest insights and trends that are reshaping dietary habits.</p> 
    <Link to="/ArticleOne" className="link-style">Read more...</Link>
</div>
    </div>
    <hr></hr>
    </div>
}

export default News;
