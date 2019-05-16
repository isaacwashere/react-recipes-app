//this comp does not need state so this will be a stateless functional component
//if a component does not need any state we can make it a stateless functional comp
import React from 'react';

//TODO: use of props might be able to be refactored (target)
const Form = props => (
  <form onSubmit={ props.getRecipe } style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="recipeName"/>
    <button className="form__button" >Search</button>
  </form>
);

export default Form;
