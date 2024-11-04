import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../utils/client';

const Product = ({ image, name, price, slug }) => {
  return (
    <div>
        <Link to={`/product/${slug}`}>
            <div className="product-card">
                { image && <img src={urlFor(image[0])}/> }
                <p className="product-name">{name}</p>
                <p className="product-price">{price}</p>
            </div>
        </Link>
    </div>
  )
}

export default Product