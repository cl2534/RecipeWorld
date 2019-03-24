import React, {Component} from 'react';
import Header from './Header';
import RecipeContainer from './RecipeContainer';

// User's own page. This page will show user's posts. 
export default class UserPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: {},
      myRecipes: [],
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = () => {
    if (window.location.href.includes("my-page")) {
      fetch('api/getUsers/' + this.props.userId)
      .then(res => res.json())
      .then(res => {
        this.setState({
        currentUser: res.user,
      }); return res.user._id})
      .then(userId => this.getmyRecipes(userId))
    } else {
      let otherUserId = ''
      otherUserId = window.location.href.split('/').slice(-1).toString()
      console.log(otherUserId)
      fetch('api/getUsers/' + otherUserId)
      .then(res => res.json())
      .then(res => {
        this.setState({
        currentUser: res.user,
      }); return otherUserId})
      .then(userId => this.getmyRecipes(userId))
    }
  }

  getmyRecipes = (userId) => {
    fetch('api/getRecipes/')
      .then(res => res.json())
      .then(res => {
        this.setState({
        myRecipes: res.recipes.filter(recipe => recipe.user === userId)
        })
      })
  }

  render() {
    return (
          <div className="black">
            <Header />
            <br />
            <div className="flex-container">
              <br />
              <RecipeContainer recipes={this.state.myRecipes}/>
            </div>
          </div>
        )
  }
}
