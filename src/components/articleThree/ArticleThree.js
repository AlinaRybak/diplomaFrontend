import React from "react";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import avocadoOne from "../../images/avocadoOne.jpg";
import avocadoTwo from "../../images/avocadoTwo.jpg";
import avocadoThree from "../../images/avocadoThree.jpg";

function ArticleThree(){
    return<>
    <h2 className="title-style text-center">Avocado Innovation: Elevating Vegetarian Cuisine</h2>
    <hr></hr>
    <Carousel showArrows={false} showThumbs={false} autoPlay={true} infiniteLoop={true} className="mb-3 mt-3">
    <div>
        <img src={avocadoOne} alt="avocado meal" className="carousel-img carousel-img-position rounded"/>
    </div>
    <div>
        <img src={avocadoTwo} alt="avocado meal" className="carousel-img rounded"/>
    </div>
    <div>
        <img src={avocadoThree} alt="avocado meal" className="carousel-img rounded"/>
    </div>
    </Carousel>
    <p>Avocado, a beloved fruit celebrated for its rich, creamy texture and nutrient-packed profile, is becoming the centerpiece of a new wave of vegetarian cuisine. With its versatility and health benefits, avocados are inspiring culinary innovation that extends far beyond traditional uses. Let's explore how avocados are driving an exciting transformation in vegetarian dining.</p>
    <h3 className="title-style text-center">Avocado Beyond Guacamole</h3>
    <p>While guacamole remains a beloved classic, avocados are breaking free from their guacamole stereotype. Chefs and home cooks alike are discovering the myriad ways avocados can elevate vegetarian dishes. From creamy avocado-based sauces and dressings to avocado "sushi" rolls, these green gems are providing a foundation for innovative recipes that cater to a variety of tastes and preferences.</p>
    <h3 className="title-style text-center">Nutrient-Rich Superfood</h3>
    <p>Avocados aren't just delicious; they're also a nutritional powerhouse. Packed with heart-healthy monounsaturated fats, fiber, and essential vitamins and minerals, avocados offer a satisfying and nourishing option for vegetarians. This nutrient density has led to the creation of avocado-centered dishes that showcase the fruit's ability to enhance both taste and nutrition.</p>
    <h3 className="title-style text-center">Sustainability and Culinary Creativity</h3>
    <p>Avocado innovation isn't just about taste and health—it's also about sustainability. As environmental concerns grow, chefs are turning to avocados to reduce the ecological impact of their menus. Avocado's versatility allows it to replace animal-based ingredients, contributing to a more sustainable food system. This shift towards plant-based creativity encourages the exploration of diverse flavors and textures that enrich the vegetarian culinary experience.</p>
    <p>In conclusion, avocados are more than a trendy ingredient; they're an innovation driving the evolution of vegetarian cuisine. From reimagining traditional dishes to offering a nutrient-packed superfood, avocados are shaping the way we think about plant-based dining. Their adaptability, nutrition, and sustainability make them a fitting symbol of culinary creativity and a promising future for vegetarian food enthusiasts.</p>
    <hr></hr>
    </>
}

export default ArticleThree;