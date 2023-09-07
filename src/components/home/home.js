import React from "react";
import './App.css';
import recipe from "../../images/recipe.jpg";
import products from "../../images/products.jpg";
import ButtonProducts from "../buttonProducts/ButtonProducts";
import ButtonRecipe from "../buttonRecipe/ButtonRecipe";
import News from "../news/News";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import productOne from "../../images/productOne.jpg";
import productTwo from "../../images/productTwo.jpg";
import productThree from "../../images/productThree.jpg";
import NewsContainer from "../newsContainer/NewsContainer";
import Quality from "../quality/Quality";

function Home (){

    return <div>
    <hr></hr>
    <div><p>At <span className="brand-style">Green Food Brands</span>, our passion lies in crafting delectably nutritious food, beverages, essential cooking ingredients, and beauty products. We are dedicated to sourcing ingredients that are pure, natural, ethical, and sustainable, without any unnecessary additives. </p>
    <p>Our recipes are a harmonious blend of the finest elements from around the globe, featuring fair-trade coconuts from Sri Lanka and aromatic Eastern-inspired curries and spices. Embrace the goodness of nature with our range of wholesome products, precisely as nature intended...</p>
    </div>
    <Quality/>
    <hr></hr>
    <h3 className="pb-3 title-style text-center">Meet new products from our best manufacturers</h3>
    <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
    <div>
        <img src={productOne} alt="product" className="carousel-image carousel-image-position"/>
    </div>
    <div>
        <img src={productTwo} alt="product" className="carousel-image"/>
    </div>
    <div>
        <img src={productThree} alt="product" className="carousel-image carousel-image-position"/>
    </div>
    </Carousel>
    <hr></hr>
    <div className="row">
        <div className="col-md-6 text-left">
            <h3 className="pb-3 title-style">let's go buying</h3>
            <img className="rounded w-100 pb-3"src={products} alt="products"/>
            <h3 className="pb-3 title-style">Introducing our fresh new look!</h3>
            <p className="pb-3">Embracing tradition with a contemporary touch. Experience the wonders of a delightful selection of globally inspired plant-based organic cuisine.</p>
            <ButtonProducts/>
        </div>
        <div className="col-md-6 text-left">
        <h3 className="pb-3 title-style">let's go cooking</h3>
        <img className="rounded w-100 pb-3" src={recipe} alt="recipe"/>
        <h3 className="pb-3 title-style">Ready to go on a culinary adventure?</h3>
        <p className=" pb-3">Unearth a delectable and diverse treasure trove of irresistibly mouthwatering recipes artfully crafted by our exceptionally talented in-house chef.</p>
        <ButtonRecipe/>
        </div>
    </div>
    <hr></hr>
    <News/> 
    <NewsContainer/>
    </div>};

export default Home;