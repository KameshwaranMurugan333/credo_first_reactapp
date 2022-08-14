import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { withHOC } from "../../HOC's";

export const LoginScreen = withHOC((props) => {

    // const [state, setState] = React.useState({ email: '', password: '' });

    // const onSubmit = () => alert("Welcome");

    const btn1Ref = React.createRef();
    const uploadFileRef = React.createRef();

    const onButton2Clicked = () => {
        btn1Ref.current.click()
    }

    const onButton1Clicked = () => {
        alert("Button 1 clicked")
    }

    const onUploadBtnclicked = () => {
        uploadFileRef.current.click();
    }

    const condition = false;
    const trueContent = <p>I am true</p>;
    const falseContent = <p>{"{ message: 'I am true'}"}</p>;

    return <>
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
        {condition ? trueContent : falseContent}
        <Button variant="primary" type="submit" onClick={(e) => e.traget.findAll()}>
            Submit
        </Button>
        <Button ref={btn1Ref} onClick={onButton1Clicked}>Button 1</Button>
        <Button onClick={onButton2Clicked}>Button 2</Button>

        <input ref={uploadFileRef} style={{ display: "none" }} type={"file"}></input>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Button onClick={onUploadBtnclicked}>Upload</Button>

    </>
})