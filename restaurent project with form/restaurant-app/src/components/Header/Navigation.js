import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {

      state = {
            isNavOpen: false
      }

      navToggler = () => {
            this.setState(
                  {
                        isNavOpen: !this.state.isNavOpen
                  }
            )
      }

      render() {
            return (
                  <div>
                        <Navbar dark color="dark" expand="sm">

                              <NavbarToggler onClick={this.navToggler} />

                              <NavbarBrand href="/">Restaurant</NavbarBrand>

                              <Collapse isOpen={this.state.isNavOpen} navbar>

                                    <Nav className="mr-auto" navbar>
                                          <NavItem>
                                                <Link to="/" className="nav-link active">Home</Link>
                                          </NavItem>

                                          <NavItem>
                                                <Link to="/menu" className="nav-link">Menu</Link>
                                          </NavItem>

                                          <NavItem>
                                                <Link to="/about" className="nav-link">About</Link>
                                          </NavItem>

                                          <NavItem>
                                                <Link to="/contact" className="nav-link">Contact</Link>
                                          </NavItem>
                                    </Nav>

                              </Collapse>

                        </Navbar>
                  </div >
            );
      }
}


export default Navigation;