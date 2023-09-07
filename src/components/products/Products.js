import React, { useEffect, useState } from "react";
import './Products.css';
import Product from "../product/Product";
import Cart from "../cart/Cart";
import SearchBar from "../searchBar/SearchBar";


    function Products(){
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=>{
    fetch('/products')
    .then(res=>res.json())
    .then(data=>setProducts(data.map(product =>({...product, addedToCart: false, count: 1}))))
},[]);

    useEffect(() => {
    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    }, [searchQuery, products]);
 

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
    <h2 className="col-12 text-center title-style mb-4">Our Green Products</h2>
    <div className="d-flex justify-content-between mb-3">
        <div> <Cart
        removeProductFromCart={removeProductFromCart}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        products={products.filter(product => product.addedToCart)}
    /></div>
        <div><SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /></div>
    </div>
    <div className="row">
        {filteredProducts.map(product => (
            <Product
                addProductToCart={addProductToCart}
                removeProductFromCart={removeProductFromCart}
                key={product.id}
                product={product}
            />
        ))}
    </div>
</div>
}

export default Products;