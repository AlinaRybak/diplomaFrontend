import React from "react";
import "./App.css";
import { useState } from "react";
import { Badge } from "react-bootstrap";
import Total from "../total/Total";
import { Button, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Cart({ products, removeProductFromCart, increaseCount, decreaseCount }) {
  const [showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <Button variant="success" onClick={handleToggleCart}>
        shopping cart
      </Button>
      <Modal show={showCart} onHide={handleToggleCart}>
        <Modal.Header closeButton>
          <Modal.Title>your bag:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='col-12'>
            {products.map((product) => (
              <li key={product.id}>
                {product.title} (
                  <Badge
                  className="bg-danger text-white cursor"
                  onClick={() => {
                    if (product.count > 0) {
                      decreaseCount(product.id);
                    }
                  }}
                  disabled={product.count === 0}
                >
                  -
                </Badge>
                &nbsp; {product.count} &nbsp;
                <Badge
                  className="bg-success text-white cursor"
                  onClick={() => increaseCount(product.id)}
                >
                  +
                </Badge>{' '}
                )
                <Badge
                  className="bg-danger text-white ml-4 cursor"
                  onClick={() => removeProductFromCart(product.id)}
                >
                  Remove
                </Badge>
              </li>
            ))}
          </ul>
          <Total products={products} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggleCart}>
            close
          </Button>
          <Link
          to={{
      pathname: "/order", state: {
        products: products,
      },
      }}>
    <button type="button" className="btn btn-success">
    Confirm
    </button>
    </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
