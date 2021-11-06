import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Alert, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Notification from './Notification';

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
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.error !== nextProps.error) {
            if (nextProps.error.id == "LOGIN_FAIL") {
                this.setState({ errors: nextProps.error.msg })
            }
        }

        if (this.props.isAuthenticated !== nextProps.isAuthenticated) {
            if (nextProps.isAuthenticated === true) {
                this.props.history.push('/Home');
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        //validate the email and password before sending it 
        const { email, password } = this.state;

        if ((email === '' || email === undefined) && (password === '' || password === undefined)) {
            this.setState({ errors: "Email and Password are required" })
        }
        else {
            this.setState({ errors: "" });
            this.props.login(email, password);
        }
    };

    handleChange = async event => {
        const { target } = event;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const { name } = target;
        this.setState({
            [name]: value
        });
    };

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
                {this.state.errors ? <Alert color='danger' text-align="center">{this.state.errors}</Alert> : null}
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
                    <Button className="btn btn-primary" color="primary" dark onClick={this.validateForm, <Notification {...email} />} type="submit">
                        Login
                    </Button>
                    <p>Don't have an account?<Link className="btn btn-link" to='/Signup'>Sign Up Here</Link></p>
                </Form>
            </div>
        );
    }
}

export default Login;
