import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const LoginScreen = (props) => {

    // const [state, setState] = React.useState({ email: '', password: '' });

    // const onSubmit = () => alert("Welcome");

    const condition = false;
    const trueContent = <p>I am true</p>;
    const falseContent = <p>{"{ message: 'I am true'}"}</p>;

    return <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                   {props.message}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {condition? trueContent : falseContent}
            <Button variant="primary" type="submit" onClick={(e)=>e.traget.findAll()}>
                Submit
            </Button>
    </div>
}