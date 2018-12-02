import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Menu } from 'semantic-ui-react'
import { NavLink, withRouter} from 'react-router-dom'

const Header = ({location: { pathname } }) => {

//This is the header. Pretty self explanatory. Navbar is a pre built
//component included in the react-bootstrap library.
    return (
      <Menu pointing secondary>
          <Menu.Item as={NavLink} to="/recipes" name="Recipe World" active={pathname === '/recipes'} />
          <Menu.Menu position="right">
            <br></br>
            <Menu.Item as={NavLink} to="/my-page" name="Profile" active={pathname === '/my-page'} />
            <br></br>
            <Menu.Item as={NavLink} to="/newRecipe" name="Create Recipe" active={pathname === '/newRecipe'} />
          </Menu.Menu>
      </Menu>
    )
  }

export default withRouter(Header);
