import React from "react";
import {
  Navbar,
  Nav,
  // NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";
import { useDispatch } from "react-redux";
import { logout } from "../pages/auth/auth";

const MyNavbar = () => {
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link to="/" className="navbar-brand">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="GLib logo"
        />
        GLib
      </Link>
      {/* <Navbar.Brand href="#home">GLib</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/count">
            Count
          </NavLink>
          <NavLink
            className="nav-link"
            to="/login"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </NavLink>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
