import React, {Component} from 'react';
import Header from './Header';
import RecipeContainer from './RecipeContainer';
import Typography from '@material-ui/core/Typography';
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

//This function will grab user's Id and based on the User's Id, it will call "getMyRecipes" function.
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
      // console.log(otherUserId)
      fetch('api/getUsers/' + otherUserId)
      .then(res => res.json())
      .then(res => {
        this.setState({
        currentUser: res.user,
      }); return otherUserId})
      .then(userId => this.getmyRecipes(userId))
    }
  }

//Given user Id as an argument, this function will filter recipes based on given user's id.
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
      <React.Fragment>
        <Header />
        <br/>
        <br/>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom> My Recipes </Typography>
          <br/>
          <br/>
            <div className="flex-container">
                <RecipeContainer recipes={this.state.myRecipes}/>
            </div>
      </React.Fragment>
        )
  }
}
