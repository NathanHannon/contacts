import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                <hr />
                <Form autoComplete="off" action=''>
                    <FormGroup>
                        <Label for="email"><h4>Email</h4></Label>
                        <Input type="email" autoComplete="off" name="email" className="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password"><h4>Password</h4></Label>
                        <Input autoComplete="new-password" type="password" name="password" className="password" />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Signup;
