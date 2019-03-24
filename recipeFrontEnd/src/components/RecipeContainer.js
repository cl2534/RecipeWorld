import React, {Component} from 'react';
import Recipe from './Recipe';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
//container class for posts
//passes props to Recipe class
export default class RecipeContainer extends Component{
  constructor(props) {
    super(props)
  }

//renders post components. maps through the posts passed in via props.
  renderRecipe = () => {
    return this.props.recipes.map(recipe => {
      return (
      <Recipe recipe={recipe} key={recipe.id}/>
    )}
    )
  }


  render() {
    return (
      <Grid container spacing={16} justify="center">
        {this.renderRecipe()}
      </Grid>

    )
  }
}
//default props for the component, so the application doesn't crash if it doesnt have any.
RecipeContainer.defaultProps = {
  recipes: [],
}
