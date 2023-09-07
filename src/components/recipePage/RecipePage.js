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
    <div className="one-recipe-container">
  <h2 className="text-center title-style mt-3 mb-3">{recipe.title}</h2>
  <div className='row'>
    <div className="col-md-6">
      <img src={`data:image/jpeg;base64,${recipe.image}`} alt={recipe.title} className="img-fluid one-recipe-img" />
  </div>
    <div className="col-md-6">
      <p>{recipe.description}</p>
      </div>
    </div>
  </div>

  );
}

export default RecipePage;

