import React, { useEffect, useState } from "react";

function Total ({products}){

    const [total, setTotal] = useState(0);
    useEffect (() => {
        setTotal(products.reduce((acc, el) => {
            return acc + (el.price * el.count)}, 0).toFixed(2))
    }, [products]);

    return  <h3 className = {'col-12'}>Total: {total}$</h3>
}

export default Total;