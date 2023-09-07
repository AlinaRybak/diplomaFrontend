import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './App.css';

function Product ({product, addProductToCart, removeProductFromCart}){
    return <div className={'col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3 product'}>
        <div className={`card custom-card text-center h-100`}>
            <div className="image-wrapper">
                <img className="rounded mx-auto d-block" src={`data:image/jpeg;base64,${product.image}`} alt={product.title} />
            </div>
            <div className={'p-0 mt-3'}>
                <h5><Link to={`/product/${product.id}`} className="link-product-custom">{product.title}</Link></h5>
                <p><b>${product.price}</b></p>
                {product.addedToCart ? (
                    <Button variant="danger" onClick={() => removeProductFromCart(product.id)}>Remove from Cart</Button>
                ) : (
                    <Button variant="success" onClick={() => addProductToCart(product.id)}>Add to Cart</Button>
                )}
            </div>
        </div>
    </div>
}

export default Product;




