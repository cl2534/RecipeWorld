import React, {Component} from 'react';
import Recipe from './Recipe';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { withRouter } from "react-router-dom";



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
    <Grid item xs = {4} zeroMinWidth container spacing = {8} key = {recipe._id}>
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
