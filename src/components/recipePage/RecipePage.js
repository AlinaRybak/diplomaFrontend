import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Отримайте дані про рецепт з вашого сервера за його ID, використовуючи fetch або інший метод
    // Приклад використання fetch:
    fetch(`/recipes/${id}`)
      .then(response => response.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>go cookies</h1>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipePage;

