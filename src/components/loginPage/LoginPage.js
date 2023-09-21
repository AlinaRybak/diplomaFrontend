import React, { useState } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginPage({ setUserName }) {
    const history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const formData = {
        name: name,
        password: password,
      };


    const handleRegisterClick = () => {
        history.push("/register");
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const user = await response.json();
                setUserName(user.name); 
                history.push("/");
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="login-page">
            <h2 className="text-center mb-3 title-style">Sign in</h2>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group>
                    <Form.Label className="form-style">name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label className="form-style">password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </Form.Group>
                <Button className="mt-3" variant="success" type="submit">
                    Sign in
                </Button>
            </Form>
            <p className="mt-3 sign-in-text" onClick={handleRegisterClick}>
                Don't have an account? Register now!
            </p>
        </div>
    );
}

export default LoginPage;
