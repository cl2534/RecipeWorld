import React, { Component } from 'react';
import Header from './Header';
import { Form } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
import { Button } from 'semantic-ui-react'


export default class NewRecipe extends Component {

  constructor(props) {
    super(props)

    this.state = {
        userId: props.userId,
        name: "",
        picture_url: "",
        method: [],
        description: "",
      }
  }

//every time a new character is entered, its value is stored into the components state.
  handleChange = (event) => {
    console.log(event.target.name, event.target.value)
    event.preventDefault()
    if (event.target.name = "method") {
      this.setState({
        method: [event.target.value]
      })
    }
    this.setState({
      [event.target.name] : event.target.value
    })
  }



  handleSubmit = (event) => {
    event.preventDefault()
    fetch('api/getRecipes', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...this.state})
    }).then(res => res.json()).then(json => this.props.history.push('/'))
  }
  // <div className="form-container black">
  //   <Header />
  //   <br />
  //   <div className="create-post-form">
  //     <form onSubmit={this.handleSubmit}>
  //       <label>Recipe Name: </label> <br />
  //       <input type="text" name="name" size="73" value={this.state.name} onChange={this.handleChange} maxlength="100"/>
  //       <br /> <br />
  //
  //       <label>Recipe Description: </label> <br />
  //       <input class = "textbox" type="text" name="description" size="73" value={this.state.description} onChange={this.handleChange} maxlength="200"/>
  //       <br /> <br />
  //
  //       <label> Method: </label> <br />
  //       <input type="URL" name="method" size = "100" value={this.state.method} onChange={this.handleChange} maxlength="200"/>
  //       <br /> <br/>
  //       <label> Image URL: </label> <br />
  //       <input type="URL" name="picture_url" size="73" value={this.state.picture_url} onChange={this.handleChange} maxlength="200"/>
  //       <br /> <br />
  //       <input type="submit" bsStyle="info" value="Submit" />
  //     </form>
  //   </div>
  // </div>
//TODO: make form even prettier.
  render() {
    return (
      <Form>
        <Header/>
          <br/>
          <br/>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Share Your Recipe
            </Typography>
          <br/>
          <br/>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Recipe Name' value={this.state.name} onChange={this.handleChange} placeholder='Recipe Name' />
              <Form.Input fluid label='Feedbacks' value={this.state.description} onChange={this.handleChange} name = "description" placeholder='Feedbacks' />
            </Form.Group>
            <Form.TextArea label='Methods' name = "methods" placeholder='List your methods here.' value={this.state.method} onChange={this.handleChange} />
            <Form.Input fluid label='Picture Url' name = "picture_url" placeholder='Copy your picture url here.'
              value={this.state.picture_url} onChange={this.handleChange}/>
            <Form.Field label='Upload picture' control='button'>
              Select
            </Form.Field>
            <br/>
          <Button primary attached = "bottom" onClick = {this.handleSubmit} >Share</Button>
      </Form>
    )
  }
}

// userId: props.userId,
// name: "",
// picture_url: "",
// method: [],
// description: "",
