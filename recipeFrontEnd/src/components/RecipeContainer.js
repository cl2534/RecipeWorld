import React, {Component} from 'react';
import Recipe from './Recipe';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

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
    <Grid item key={recipe} sm={6} md={4} lg={3}>
      <Recipe recipe={recipe} key={recipe.id}/>
    </Grid>
    )}
    )
  }


  render() {
    return (
      <Grid container spacing={40} justify="center">
        {this.renderRecipe()}
      </Grid>

    )
  }
}
//default props for the component, so the application doesn't crash if it doesnt have any.
RecipeContainer.defaultProps = {
  recipes: [],
}
