import React, { Component } from 'react';
import Header from './Header';

export default class NewRecipe extends Component {

  constructor(props) {
    super(props)

    this.state = {
        userId: props.userId,
        name: "",
        picture_url: "",
        description: "",
      }
  }

//every time a new character is entered, its value is stored into the components state.
  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch('/postRecipe', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...this.state})
    })
    .then(res => res.json())
    .then(json => this.props.history.push('/'))
  }

//TODO: make form even prettier.
  render() {
    return (
      <div className="form-container black">
        <Header />
        <br />
        <div className="create-post-form">
          <form onSubmit={this.handleSubmit}>
            <label>Recipe Name: </label> <br />
            <input type="text" name="name" size="73" value={this.state.name} onChange={this.handleChange} maxlength="100"/>
            <br /> <br />
            <label>Recipe Description: </label> <br />
            <input type="text" name="location" size="73" value={this.state.description} onChange={this.handleChange} maxlength="30"/>
            <br /> <br />
            <label> Image URL: </label> <br />
            <input type="URL" name="picture_url" size="73" value={this.state.picture_url} onChange={this.handleChange} maxlength="200"/>
            <br /> <br />
            <input type="submit" bsStyle="info" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}
