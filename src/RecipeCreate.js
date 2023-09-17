import React, { useState } from "react";

function RecipeCreate({ onRecipeCreate }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRecipeCreate(recipe);
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Recipe Name"
                value={recipe.name}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                value={recipe.photo}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
              />
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={recipe.preparation}
                onChange={handleChange}
                required
              />
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
