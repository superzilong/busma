import React from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  FormControl,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../pages/auth/auth";
import "./navbar.scss";

const MyNavbar = ({ username }) => {
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-1">
      {/* <Navbar.Brand href="#home">GLib</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse-panel">
        <Nav className="mr-auto">
          <Link to="/" className="navbar-brand navbar-icon">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Link>
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/count">
            Count
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
      </Navbar.Collapse>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        {/* <Button variant="outline-success">Search</Button> */}
      </Form>
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          variant="outline-secondary"
          className="border-0"
          id="dropdown-custom-1"
          // split="false"
          bsPrefix="btn"
        >
          <img
            src="https://webpack.js.org/icon-square-small.85ba630cf0c5f29ae3e3.svg"
            alt="avatar"
            style={{
              objectFit: "cover",
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
            className="rounded-circle"
          />
        </Dropdown.Toggle>
        <Dropdown.Menu className="super-colors mt-2 shadow" align="right">
          <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
          <Dropdown.Item
            eventKey="2"
            onClick={() => {
              dispatch(logoutAsync());
            }}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Navbar>
  );
};

export default MyNavbar;
