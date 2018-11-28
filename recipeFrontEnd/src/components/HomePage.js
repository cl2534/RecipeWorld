import React, { Component } from 'react';
import RecipeContainer from './PostContainer.js';
import Header from './Header.js';
export default class HomePage extends Component {

  state = {
    recipes: []
  }

//The homepage doesn't make an API call until it's been rendered.
  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = () => {
    fetch('')
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
        <br />
        <div className="flex-container">
          <RecipeContainer recipes = {this.state.recipes}/>
        </div>
      </div>
    )
  }
}
