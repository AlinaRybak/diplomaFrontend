import React, { useState, useEffect } from "react";
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
      <h2 className="text-center mb-3 title-style">Recipes</h2>
      <div className="recipe-container d-flex justify-content-center"> 
        {recipes.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img className="img-recipe" src={`data:image/jpeg;base64,${recipe.image}`} alt={recipe.title} />
            </Link>
            <h2 className="recipe-title">{recipe.title}</h2>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-center mb-3 mt-5 title-style">Do you have a recipe you would like to share?</h3>
        <p className="text-center mb-5">If you've got a recipe featuring any of our Swejner's, OrgRan's, or Free and Easy products that you'd like to share, simply send it to info@greensales.co.uk, along with your name and photos. Your recipe might just make its way onto our website!</p>
      </div>
      <hr />
    </>
  );
}

export default Recipe;
