import React from "react";

import "./Recipe.css"

const Recipe = ({ title, calories, image, ingredients}) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <h3>Ingredients</h3>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <h3>Calories</h3>
      <p>{calories}</p>
      <img className="image" src={image} alt="" />
    </div>
  );
};

export default Recipe;
