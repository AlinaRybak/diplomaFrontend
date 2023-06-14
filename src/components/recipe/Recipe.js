import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';
import lemonCookies from "../../images/lemon-cookies.jpg";
import crepeBanan from "../../images/crepe+banan.jpg";
import pancake from "../../images/pancake.jpg";

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
        {recipes.map(recipe => (
          <div className="image-wrapper col-md-6" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img className="img-recipe ml-4" src={recipe.image} alt={recipe.title} />
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
