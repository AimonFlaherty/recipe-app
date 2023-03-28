import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const collectData = (data) => setRecipes([...recipes, data]);
  const handleDelete =(name) =>{
    const index = recipes.findIndex((val) => val.name === name);
    if(index >-1) recipes.splice(index, 1);
    setRecipes([...recipes]);
  }
  console.log(recipes.length);
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} handleDelete={handleDelete}/>
      <RecipeCreate collectData={collectData}/>
    </div>
  );
}

export default App;
