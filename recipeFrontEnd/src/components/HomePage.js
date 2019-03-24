import React, { Component } from 'react';
import RecipeContainer from './RecipeContainer.js';
import Header from './Header.js';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class HomePage extends Component {

  state = {
    recipes: []
  }

//The homepage doesn't make an API call until it's been rendered.
  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = () => {
    fetch('api/getRecipes')
    .then(res => res.json())
    .then(res => this.setState({
      recipes: res.recipes
    }))
  }


//renders a post container containing the five posts grabbed from the backend
  render() {
    return (
      <div className="black">
        <Header />
        <br/>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome to Recipe World
        </Typography>
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Do you love cooking?
            <br/>
            RecipeWorld features individual's specialized recipes and articles that you can use for your own home cooks!
            <br/>
            You'll find personal tips, feedbacks, and directions for each recipes so you can enjoy your home cooking easily.
          </Typography>
          <Grid container spacing={16} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Share Your Recipe
                </Button>
              </Grid>
          </Grid>
          <br/>
        <div className="flex-container">
          <RecipeContainer recipes = {this.state.recipes}/>
        </div>
      </div>
    )
  }
}
