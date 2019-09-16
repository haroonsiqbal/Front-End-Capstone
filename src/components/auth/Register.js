import React, { Component } from "react"
import UserManager from "../../modules/UserManager"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import './Register.css'

class Register extends Component {

    // Set initial state
    state = {
        username: "",
        password: "",
        id: 0
    }

    // Update state whenever an input field is edited
    handleFieldChange = (event) => {
        const stateToChange = {}
        stateToChange[event.target.id] = event.target.value
        this.setState(stateToChange)
    }

    handleRegister = (event) => {
        event.preventDefault()
        UserManager.getUsername(this.state.username).then(user => {
            if (user.length !== 0) {
                window.alert("This account already exists. Please log in or create a new account.")
                document.querySelector("#username").value = ""
                document.querySelector("#password").value = ""
            } else if (this.state.username.length === 0 || this.state.password.length === 0) {
                window.alert("Please fill out all fields.")
            } else {
            UserManager.post(this.state).then((object) => {
                sessionStorage.setItem(
                    "credentials",
                JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    id: object.id
                })
            )
                this.props.history.push("/");
            })
        }
    })
    }

    handleCancel = (event) => {
        event.preventDefault()
        this.props.history.push("/login");
    }

    render() {
        return (
        <div className="registration-container">
                <div className="registration-title-container">    
                    <h3 className="registration-title">Register</h3>
                </div>    
                <div className="registration-forms-container">
                <Form onSubmit={this.handleRegister}>
                <FormGroup>
                        <Input onChange={this.handleFieldChange} type="username"
                            id="username"
                            placeholder="Username"
                            required="" autoFocus="" />
                </FormGroup>
                <FormGroup>
                        <Input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                </FormGroup>
                </Form>
                </div>
                <div className="registration-buttons-container">
                <div className="registration-button-container1">
                    <Button color="danger" type="submit">
                        SUBMIT
                    </Button>
                </div>
                <div className="registration-button-container2">   
                    <Button color="danger" type="cancel" onClick={this.handleCancel}>
                        CANCEL
                    </Button>
                </div>
                </div>
        </div>
        )
    }

}

export default Register