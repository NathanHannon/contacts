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


    render() {
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
