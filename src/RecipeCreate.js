import React, { useState } from "react";

function RecipeCreate({collectData}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleSubmit = (event) => {
    event.preventDefault();
    collectData(formData);
    setFormData({ ...initialFormState });
 };
 const handleChange = ({target}) =>{
    setFormData({...formData, [target.name]: target.value});
 }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
              <input id="name" name="name" type="text" placeholder="Name" onChange={handleChange} value={formData.name}/>
            </td>
            <td>
              <label htmlFor="cuisine">Cuisine:</label>
              <input id="cuisine" name="cuisine" type="text" placeholder="Cuisine" onChange={handleChange} value={formData.cuisine}/>
            </td>
            <td>
              <label htmlFor="photo">Photo:</label>
              <input id="photo" name="photo" type="url" placeholder="URL" onChange={handleChange} value={formData.photo}/>
            </td>
            <td>
              <label htmlFor="ingredients">Ingredients:</label>
              <textarea id="ingredients" name="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients}/>
            </td>
            <td>
              <label htmlFor="preparation">Preparation:</label>
              <textarea id="preparation" name="preparation" placeholder="Preparation" onChange={handleChange} value={formData.preparation}/>
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
