import React, { useEffect, useState } from "react";
import './Products.css';
import Product from "../product/Product";
import Cart from "../cart/Cart";


    function Products(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
    fetch('/products')
    .then(res=>res.json())
    .then(data=>setProducts(data.map(product =>({...product, addedToCart: false, count: 1}))))
},[]);
 

    function increaseCount(id){
        const result = products.map(product => ({...product, count: product.id === id ? product.count + 1 : product.count}));
        setProducts(result);
    }

    function decreaseCount(id){
        const result = products.map(product => ({...product, count: product.id === id ? product.count - 1 : product.count}));
        setProducts(result);
    }


    function addProductToCart (id){
            const result = [];
            for (let product of products){
                if (product.id === id){
                    result.push({...product, addedToCart: true})
                } else{
                    result.push(product);
                }
            }
            setProducts(result);
    }

    function removeProductFromCart (id){
        const result = products.map(product => ({...product, addedToCart: product.id === id ? false : product.addedToCart}));
        setProducts(result);
}

    return <div className={'p-5'}>
        <h3 className="col-12 text-center">Our Green Products</h3>
        <Cart removeProductFromCart ={removeProductFromCart}
            increaseCount = {increaseCount}
            decreaseCount = {decreaseCount}
        products = {products.filter (product => product.addedToCart)}/>
        <div className="row">
       {products.map(product => <Product 
       addProductToCart = {addProductToCart}
       removeProductFromCart = {removeProductFromCart}
       key = {product.id} product ={product}/>)}
       </div>
    </div>
}

export default Products;