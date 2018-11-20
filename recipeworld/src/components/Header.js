import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

export default class Header extends Component {

  constructor(props) {
    super(props)
  }

//This is the header. Pretty self explanatory. Navbar is a pre built
//component included in the react-bootstrap library.
  render() {
    return (
      <Navbar className="navbar default fixed-top header">
        <Navbar.Header>
          <Navbar.Brand>
            <Link className='header-element' to="/"> RecipeWorld </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Link className='header-element' to="/recipes"> Recipes </Link>
        <Link className='header-element' to="/my-page"> Profile </Link>
        <Link className='header-element' to="/newRecipe"> Share Recipe </Link>
      </Navbar>)
  }
}
