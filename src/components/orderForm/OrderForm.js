import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function OrderForm() {

  const location = useLocation();
  const { products } = location.state;
  console.log(products);

  const totalAmount = products.reduce((total, product) => {
    return total + product.price * product.count;
  }, 0);

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
    <>
    <h1>Order Details</h1>

    {products.map((product, index) => (
    <div key={index}>
    <h3>{product.title}</h3>
    <p>Price: $ {product.price}</p>
    <p>Quantity: {product.count}</p>
    </div>
      ))}

       <p>Total Amount: {totalAmount}</p>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
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
    </>
  );
}

export default OrderForm;
