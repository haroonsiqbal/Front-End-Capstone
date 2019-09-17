import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserManager from "../../modules/UserManager";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './Login.css'

class Login extends Component {
  // Set initial state
  state = {
    username: "",
    password: "",
    id: 0
  };

  // Update state whenever an input field is edited
  handleFieldChange = event => {
    const stateToChange = {};
    stateToChange[event.target.id] = event.target.value;
    this.setState(stateToChange);
  };

  handleLogin = event => {
    event.preventDefault();
    UserManager.getUsernamePassword(
      this.state.username,
      this.state.password
    ).then(user => {
      if (user.length === 0) {
        window.alert(
          "The username and password combination you have entered is not valid. Please try again or click the link below to create a new account."
        );
        document.querySelector("#username").value = "";
        document.querySelector("#password").value = "";
      } else {
        this.setState({ id: user[0].id });
        sessionStorage.setItem(
          "credentials",
          JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            id: this.state.id
          })
        );
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
    <div className="login-container">
      <div className="login-title-container">
        <h3 className="login-title">Login</h3>
      </div>
      <div className="login-forms-container">
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Input
                onChange={this.handleFieldChange}
                type="username"
                id="username"
                placeholder="Username"
                required=""
                autoFocus=""
              />
            </FormGroup>
            <FormGroup>
              <Input
                onChange={this.handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
                required=""
              />
            </FormGroup><br></br>
        <Button color="danger" type="submit">
          SUBMIT
        </Button>
          </Form>
      </div>
        <div className="registration-link">
        <Link style={{ color: "#FFC23A" }}className="nav-link_login" to="/register">
          Don't have an account?
        </Link>
        </div>
      </div>
    );
  }
}
export default Login;
