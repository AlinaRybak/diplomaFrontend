import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function RecipePage() {

  let { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch('/recipes/'+ id)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div class="container">
  <h1 class="text-center text-recipe-style">{recipe.title}</h1>
  <div className='row'>
    <div class="col-md-6">
      <img src={recipe.image} alt={recipe.title} class="img-fluid" />
  </div>
    <div class="col-md-6">
      <p class="text-recipe-style text-style-description">{recipe.description}</p>
      </div>
    </div>
  </div>

  );
}

export default RecipePage;

