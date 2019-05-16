//consider making this entire component a pop up modal
import React from 'react';
import { Link } from 'react-router-dom'

const ALWAYZ_ASKIN_ME_THE_KEY_JR = process.env.REACT_APP_API_KEY_B;

class MoreInfoRecipe extends React.Component {
  state = {
    activeRecipe: []
  }

  //this will fire on component mount to get the specified recipe's data
  //TODO: consider using a useEffect when refactoring (?)
  componentDidMount = async () => {
    const specificRecipe = this.props.location.state.recipeName;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${ ALWAYZ_ASKIN_ME_THE_KEY_JR }&q=${ specificRecipe  }`)
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
  }

  render() {
    const currentRecipe = this.state.activeRecipe
    
    return(
      <div className="container">
        { this.state.activeRecipe.length !== 0 && 
          <div className="active=recipe">
            <img className="active-recipe__img" src={ currentRecipe.image_url } alt={ currentRecipe.title }/>
            <h3 className="active-recipe__title">{ currentRecipe.title }</h3>
            <h4 className="active-recipe__publisher">
              Publisher<span>{ currentRecipe.publisher }</span>
            </h4>
            <p className="active-recipe__website">
              Website:<span><a href={ currentRecipe.publisher_url }>{ currentRecipe.publisher_url }</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
}

export default MoreInfoRecipe;
