import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';


function Recipe(){

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data));
  }, []);

    return (
        <>
            <h1 className="text-center text-title-style mb-5">Recipes</h1>
            <div className="row">
            <div className="text-style text-center mt-5 col-md-6">
                    <p>Hanna, our talented in-house chef, has passionately curated a collection of recipes crafted using our brand's finest products.</p>
                    <p>Explore an array of delightful and flavorful dishes and indulgences that are sure to delight you throughout the year.</p>
                </div>
        {recipes.map(recipe => (
          <div className="image-wrapper col-md-6" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img className="img-recipe ml-4" src={`data:image/jpeg;base64,${recipe.image}`} alt={recipe.title} />
            </Link>
            <h2 className="text-centered text-white text-title-style brand-name-style">{recipe.title}</h2>
          </div>
        ))}
      </div>
      <div>
          <h2 className="text-center text-title-style mb-5 mt-5">Do you have a recipe you would like to share?</h2>
            <p className="text-center text-style mb-5">If you've got a recipe featuring any of our Swejner's, OrgRan's, or Free and Easy products that you'd like to share, simply send it to info@greensales.co.uk, along with your name and photos. Your recipe might just make its way onto our website!</p>
            </div>
            <hr></hr>
        </>
    );
}

export default Recipe;
