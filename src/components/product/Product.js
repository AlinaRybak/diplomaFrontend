import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product ({product, addProductToCart, removeProductFromCart}){
    return <div className={'col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3 product'}>
        <Card>
  <Card.Img variant="top" src={product.image} />
  <Card.Body className={'p-0 mt-3'}>
    <Card.Title><Link to={`/product/${product.id}`}>{product.title}</Link></Card.Title>
    <Card.Text>
        {product.description}
    </Card.Text>
    <Card.Text>
        <b>${product.price}</b>
    </Card.Text>
    {product.addedToCart ? <Button variant="danger" onClick={()=> removeProductFromCart(product.id)}>Remove from Cart</Button> : 
    <Button variant="success" onClick={()=>addProductToCart(product.id)}>Add to Cart</Button>}
  </Card.Body>
</Card>
</div>
}

export default Product;