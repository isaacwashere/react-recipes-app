//this comp does not need state so this will be a stateless functional component
//if a component does not need any state we can make it a stateless functional comp
import React from 'react';

const Form = props => (
  <form onSubmit={ props.getRecipe }>
    <input type="text" name="recipeName"/>
    <button>Search</button>
  </form>
);

export default Form;