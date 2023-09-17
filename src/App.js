import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const handleRecipeCreate = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

    const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((_, index) => index !== indexToDelete));
  }



  return (
    <div className="App">
      <header>
      <h1 style={{ fontFamily: "Playfair Display SC", textAlign: "center", fontSize:"64px" }}>Delicious Food Recipes</h1>

      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate onRecipeCreate={handleRecipeCreate} />
      
    </div>
  );
}

export default App;
