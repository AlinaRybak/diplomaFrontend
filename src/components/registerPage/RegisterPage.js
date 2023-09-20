import React, { useState } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function RegisterPage({ setUserName }) {
  const history = useHistory();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleUserSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Password and confirm password do not match');
      return;
    }
    
    const NewUserData = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(NewUserData),
      });

      setUserName(NewUserData.name);

      console.log('User registered successfully');

    history.push('/');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleLogClick = () => {
    history.push("/login");
  };   

  return (
    <div className="login-page">
      <h2 className="text-center mb-3 title-style">Register</h2>
      <Form onSubmit={handleUserSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className="form-style">name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label className="form-style">phone number</Form.Label>
          <Form.Control
            type="tel"
            pattern="[0-9]{10}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="form-style">email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="form-style">password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formcConfirmPassword">
          <Form.Label className="form-style">confirm password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </Form.Group>

        <Button className="mt-3" variant="success" type="submit">
          Register now
        </Button>
      </Form>
      <p className="mt-3 sign-in-text" onClick={handleLogClick}>
        Already have an account? Log in now!
      </p>
    </div>
  );
}

export default RegisterPage;
