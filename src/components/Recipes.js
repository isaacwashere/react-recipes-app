import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map((indivRecipe) => {
          return(
            <div key={ indivRecipe.recipe_id } className="col-md-4" style={{ marginBottom: "2rem" }} >
              <div className="recipes__box">
                <img 
                  src={ indivRecipe.image_url } 
                  alt={ indivRecipe.title } 
                  className="recipe__box-img"
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    { indivRecipe.title.length < 20 ? `${ indivRecipe.title}` : `${ indivRecipe.title.substring(0, 25) }...` }
                  </h5>
                  <p className="recipes__subtitle">Publisher: 
                    <span> { indivRecipe.publisher }</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link to={{ pathname: `/recipe/${ indivRecipe.recipe_id }` }}>View More</Link>
                </button>
              </div>
            </div>
            );
          }
        )
      }
    </div>
  </div>
);

export default Recipes;

