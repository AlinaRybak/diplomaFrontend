import React from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginPage() {

    const history = useHistory();

    const handleRegisterClick = () => {
        history.push("/register");
    };

    return (
        <div className="login-page">
            <h2 className="text-center mb-3 title-style">Sign in</h2>
            <Form> 
                <Form.Group>
                <Form.Label className='form-style'>name</Form.Label>
                <Form.Control type="text" name="name" required/>
                        </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label className='form-style'>password</Form.Label>
                    <Form.Control type="password" name="password" required/>
                </Form.Group>
                <Button className="mt-3" variant="success" type="submit">Sign in</Button>
            </Form>
            <p className="mt-3 sign-in-text" onClick={handleRegisterClick}>Don't have an account? Register now!</p>
        </div>
    );
}

export default LoginPage;

