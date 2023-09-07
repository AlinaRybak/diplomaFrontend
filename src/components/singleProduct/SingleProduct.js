import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './App.css'; 

function SingleProduct() {
    let { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch('/products/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-product">
            <div className="product-image">
                <img src={`data:image/jpeg;base64,${product.image}`} alt={product.title} />
            </div>
            <div className="product-details">
                <h2>{product.title}</h2>
                <p className="description">{product.description}</p>
                <p className="price"><b>${product.price}</b></p>
            </div>
        </div>
    );
}

export default SingleProduct;
