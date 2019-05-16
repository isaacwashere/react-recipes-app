import React, { Component } from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes'
import './App.css';

const ALWAYZ_ASKIN_ME_THE_KEY = process.env.REACT_APP_API_KEY_B;

class App extends Component {

  //TODO: consider using Hooks with a recipe and setRecipes (?) when refactoring
  state = {
    recipes: []
  }

  //makes the initial API Call
  //TODO: this call is too messy, target when refactoring
  getRecipe = async (e) => {
    console.log("GET MY SHIT")
    const userQuery = e.target.elements.recipeName.value;
    e.preventDefault();
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${ ALWAYZ_ASKIN_ME_THE_KEY }&q=${ userQuery }&count=10`)
    const data = await response.json();
    this.setState({ recipes: data.recipes })
    console.log(this.state.recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }


  //use local storage to store data
  //local storage only takes string
  //go to application => Local Storage in Chrome Dev Tools to view Local Storage
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipes</h1>
        </header>
        <Form getRecipe={ this.getRecipe } />
        <Recipes recipes={ this.state.recipes }/>
      </div>
    );
  }
}

export default App;
