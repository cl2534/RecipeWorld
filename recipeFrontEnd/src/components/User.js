import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card';


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
    fetch(`api/getUsers/` + this.props.userId).then(res => res.json()).then(res => this.setState({
      currentUser: res.user
    }))
  }


  render() {
    return (
      <div className = 'user'>
        Written By Chef: {this.state.currentUser.name}
      </div>
    )
  }
}
