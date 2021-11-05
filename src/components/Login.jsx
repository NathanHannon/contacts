import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: '',
            email: '',
            password: '',
            validate: {
                emailState: '',
            }
        };
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success';
        } else {
            validate.emailState = 'has-danger';
        }
        this.setState({ validate });
    };

    render() {
        const { email, password, errors } = this.state;
        return (
            <div className="container">
                <h1>Login</h1>
                <hr />
                <Form action=''>
                    <FormGroup>
                        <Label for="email"><h4>Email</h4></Label>
                        <Input type="email" name="email" className="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"><h4>Password</h4></Label>
                        <Input type="password" name="password" className="password" />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Login;
