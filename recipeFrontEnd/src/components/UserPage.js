import React, {Component} from 'react';
import Header from './Header';
import RecipeContainer from './RecipeContainer';

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
      fetch('')
      .then(res => res.json())
      .then(res => {
        this.setState({
        currentUser: res.user
        });
        return res.user.id})
      .then(user_id => this.userRecipes(user_id))
    } else {
      let userId = window.location.href.split('/').slice(-1)
      fetch('')
      .then(res => res.json())
      .then(json => {
        this.setState({
          currentUser: json.user
        });
        return json.user.id})
      .then(user_id => this.userRecipes(user_id))
    }
  }


  userRecipes = (id) => {
    fetch('')
    .then(res => res.json())
    .then(res => this.setState({
      myRecipes: res.recipes.filter(recipe => recipe.user_id === id)
    }))
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
