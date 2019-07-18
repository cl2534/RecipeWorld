import React , {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';



// Individual User. Comes down from UserPage
export default class User extends Component{
  // state = {}
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ''
    }
  }

  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = () => {
    fetch(`api/getUsers/` + this.props.userId)
    .then(res => res.json())
    .then(res => this.setState({
      currentUser: res.user
    }))
  }


  render() {
    return (
      <div>
        {this.state.currentUser.name.charAt(0)}
        </div>
    )
  }
}
