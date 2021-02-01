import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAsync } from "../../store/auth";
import "./login.css";
import { toast } from "react-toastify";
import bg from "./bg.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  return (
    <div className="min-vh-100" style={{ paddingTop: "25vh" }}>
      <img
        // src="https://picsum.photos/1920/1080.jpg"
        src={bg}
        alt="background"
        className="bg"
      />
      <div style={{ width: "400px" }} className="bg-light mx-auto py-5 rounded">
        <h1 className="text-center mb-5">GLib Login</h1>
        <Form style={{ width: "350px" }} className="mx-auto">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            className="w-100"
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch(loginAsync(username, password))
                .then(() => history.push("/"))
                .catch((error) => {
                  console.log(error);
                  toast.error(error.message);
                });
              //
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
