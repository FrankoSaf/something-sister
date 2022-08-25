import axios from 'axios';
import { useEffect, useContext } from 'react';
import { userContext } from '../../contexts/UserContext';

function ProductListUser() {
  const {
    userID,
    setInjectAddedProduct,
    injectAddedProduct,
    getAllUserProducts,
  } = useContext(userContext);

  useEffect(() => {
    fetch('https://backend-pra.herokuapp.com/product/all/' + userID)
      .then((res) => res.json())
      .then((products) => {
        setInjectAddedProduct(products);
      });
  }, []);

  const deleteUserProductHandler = (product) => {
    console.log(product._id);

    axios
      .delete('https://backend-pra.herokuapp.com/product/delete/' + product._id)
      .then((res) => {
        console.log(res.data); // "Product deleted" message from BE
        getAllUserProducts();
      });
  };

  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>List of user products:</h1>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {injectAddedProduct &&
          injectAddedProduct.map((product) => (
            <li
              key={product._id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                listStyleType: 'none',
                borderRight: '1px solid white',
                borderBottom: '1px solid white',
                width: '25%',
              }}
            >
              <h2 style={{ marginBottom: '7px' }}> {product.product_title}</h2>
              <p style={{ marginBottom: '7px' }}>Price: {product.price}</p>
              <p style={{ marginBottom: '7px' }}>
                quantity: {product.quantity}
              </p>
              <span
                onClick={() => deleteUserProductHandler(product)}
                style={{
                  padding: '1rem',
                  border: '1px solid white',
                }}
              >
                {' '}
                Delete
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductListUser;
