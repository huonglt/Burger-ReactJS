import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/lib';
import { Link } from 'react-router';
export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <div>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="About">About This App</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Text pullRight>
        <Link to="/Burger/Bun" style={{textDecoration: 'none', color: '#5e5e5e'}}>Burger Play</Link>

      </Navbar.Text>

        </div>
      </Navbar>
    );
  }

}
