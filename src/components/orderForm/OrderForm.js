import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import "./App.css";

function OrderForm({userName}) {

  const location = useLocation();
  const { products } = location.state;
  console.log(products);

  const totalAmount = products.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0).toFixed(2);

  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');


  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
  
    const orderData = {
      name: name,
      email: email,
      phone: phone,
      products: products.map(product => ({
        title: product.title,
        price: product.price,
        count: product.count
      }))
    };
  
    try {
      await axios.post('/orders', orderData);
  
      console.log('Order placed successfully');
  
      history.push('/confirmation');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };  

  return (
    <div className='row'>
      <div className='col'>
      <h3 className='title-style text-center mt-3 mb-3'>Order Details:</h3>
      {products.map((product, index) => (
      <div key={index}>
      <h5 className='title-style mb-0'>{product.title}</h5>
      <p className='mb-0 descr-style'>Price: ${product.price}</p>
      <p className='descr-style'>Quantity: {product.count}</p>
      </div>
        ))}
        <h5 className='title-style'>Total Amount: <span className='text-danger'>${totalAmount}</span></h5>
        </div>

        <div className='col'>
        <h3 className='title-style text-center mb-3 mt-4'>Please enter your details to order`s complete:</h3>
        <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className='mb-0'>name</Form.Label>
          <Form.Control
          type="text"
          value={userName}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label className='mb-0'>email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label className='mb-0'>phone</Form.Label>
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
    </div>
  );
}

export default OrderForm;
