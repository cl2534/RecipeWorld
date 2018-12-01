import React, {Component} from 'react';
import UserPage from './UserPage';

export default class Recipe extends Component{
  constructor(props) {
    super(props) //recipe
  }

  // handleLike = () => {
  //   fetch('', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify({likes: this.props.recipe.likes + 1})
  //   }).then(res => res.json()).then(json => this.setState({
  //     likes: this.props.post.likes++,
  //     likedAlready: true
  //   }))
  // }

  render() {
    return (
      <div className = 'post'>
        <div className = 'post-inner'>
          <div className="flex-container">
          <UserPage className="user-blurb" userId = {this.props.recipe.user} />
          </div>
          <div>
            <div className="post-title"> {this.props.recipe.name} </div>
            <div className="post-address"> {this.props.recipe.description} </div>
            <img src ={this.props.recipe.picture_url}/>
            <br />
          </div>
        </div>
      </div>
    )
  }
}
