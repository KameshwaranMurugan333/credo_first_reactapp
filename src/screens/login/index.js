import React from "react";
import { Button, Input, TextHeader } from "../../components";

export const LoginScreen = (props) =>{

    const [state,setState] = React.useState({email:'',password:''});

    const updateEmail = (email) => setState({...state,email});

    const updatePassword = (password) => setState({...state,password});

    const onSubmit = () => alert("Welcome");

    return <div>
        <TextHeader title="My Company" subTitle="Login" />
        <Input 
            id={"email"} 
            value={state.email}
            onChange={updateEmail}
            type="text"
        />
        <Input 
            id={"password"} 
            value={state.password}
            onChange={updatePassword}
            type="password"
        />
        <Button id={"login_btn"} btnName="Login" onClick={onSubmit} />
    </div>
}