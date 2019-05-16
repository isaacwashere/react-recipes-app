import React, { Component } from 'react';
import Form from './components/Form';
import './App.css';

const ALWAYZ_ASKIN_ME_THE_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    recipes: []
  }

  //makes the initial API Call
  getRecipe = async (e) => {
    // const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${ ALWAYZ_ASKIN_ME_THE_KEY }&q=shredded%20chicken&count=10`)
    const data = await response.json();
    this.setState({ recipes: data.recipes })
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        <Form getRecipe={ this.getRecipe } />
        {
          this.state.recipes.map((indivRecipe) => {
            return <p key={ indivRecipe.recipe_id }>{ indivRecipe.title }</p>
          })
        }
      </div>
    );
  }
}

export default App;
