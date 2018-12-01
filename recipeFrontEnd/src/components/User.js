import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class User extends Component{
  // state = {}
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ''
    }
  }

  componentDidMount(props) {
    this.fetchUser()
  }

  fetchUser = (user_id) => {
    fetch(`api/getUsers/` + this.props.userId).then(res => res.json()).then(res => this.setState({
      currentUser: res.user
    }))
  }


  render() {
    console.log(this.state.currentUser._id)
    return (
      <div className = 'user'>
          <Link className='user-text user-name' to={"/user/" + this.state.currentUser._id} params={{userId: this.state.currentUser._id}}> {this.state.currentUser.name} </Link>
          <br />
          <br />
      </div>
    )
  }
}
