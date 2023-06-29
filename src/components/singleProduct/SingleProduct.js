import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function SingleProduct(){

    let { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=> {
        fetch('/products/' + id)
    .then(res=>res.json())
    .then(data=>setProduct(data))
},[id]);

if (!product) {
    return <div>Loading...</div>;
  }

    return <div className={'col-sm-6 offset-sm-3 p-3 product'}>
    <Card>
<Card.Img className="rounded mx-auto d-block mt-5" variant="top" src={`data:image/jpeg;base64,${product.image}`}  />
<Card.Body className={'p-0 mt-3 text-center'}>
<Card.Title>{product.title}</Card.Title>
<Card.Text>
    {product.description}
</Card.Text>
<Card.Text className="mb-3">
    <b>${product.price}</b>
</Card.Text>
</Card.Body>
</Card>
</div>
}

export default SingleProduct;