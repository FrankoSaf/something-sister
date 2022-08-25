import {useEffect, useState} from "react";

function ProductList() {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch("https://backend-pra.herokuapp.com/product/all")
        .then( (res) => res.json())
        .then( (products) => {
            setProducts(products);
        })
    }, []
    )

    return (
        <div>
            <h1>List of all products:</h1>
            {products&&
            products.map((product) => (
                <ol key={product._id} >
                    {product.product_title}, {product.price}{"€"}
                </ol>
            ))
            }
        </div>
    )
}

export default ProductList;
