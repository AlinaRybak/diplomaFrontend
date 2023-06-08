import React from "react";
import { Badge } from "react-bootstrap";
import Total from "../total/Total";

function Cart({products, removeProductFromCart,increaseCount, decreaseCount}){
    return <>
    <ul className = {'col-12'}>
        {products.map(product => <li key={product.id}>{product.title} 
        ( <Badge className="bg-danger text-white" onClick={()=>decreaseCount(product.id)}>-</Badge>
        &nbsp; {product.count} &nbsp;
         <Badge className="bg-success text-white" onClick={()=>increaseCount(product.id)}>+</Badge> )
        <Badge className="bg-danger text-white ml-4" onClick={()=> removeProductFromCart(product.id)}>Remove</Badge></li>)}
    </ul>
    <Total products ={products}/>
    </>
}

export default Cart;
