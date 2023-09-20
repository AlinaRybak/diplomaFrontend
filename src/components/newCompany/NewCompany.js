import React, { useState } from 'react';
import "./App.css";
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

function NewCompany() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCompanySubmit = async (e) => {
    e.preventDefault();

    const NewCompanyData = {
      name: name,
      email: email,
      phone: phone,
    };

    try {
      await fetch('/about', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(NewCompanyData),
      });

      console.log('Company created successfully');

      history.push('/confirm');
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleCompanySubmit}>
        <Form.Group controlId="formName">
          <Form.Label className='form-style'>name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className='form-style'>email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label className='form-style'>phone</Form.Label>
          <Form.Control
            type="tel"
            pattern="[0-9]{10}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone"
            required
          />
        </Form.Group>

        <Button className="mt-3" variant="success" type="submit">
          confirm
        </Button>
      </Form>
    </div>
  );
}

export default NewCompany;
