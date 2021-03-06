import React from 'react';

//TODO: use of props might be able to be refactored
const Form = props => (
  <form onSubmit={ props.getRecipe } style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="recipeName"/>
    <button className="form__button">Search</button>
  </form>
);

export default Form;
