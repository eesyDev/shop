import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { client, urlFor } from '../utils/client';
import { useStateContext } from '../context/StateContext';

const ProductDetail = () => {
  const [productData, setProductData] = useState({});
  const [productsData, setProductsData] = useState([]);
  const [imgIndex, setImgIndex] = useState(0)
  const { slug } = useParams();
  const { onAdd, incrementQty, decrementQty, qty } = useStateContext()

  useEffect(() => {
      client.fetch(`*[_type == "product" && slug.current == "${slug}"][0]`).then(data => setProductData(data));

      client.fetch(`*[_type == "product"]`).then(data => setProductsData(data));
  }, []);

  const { image, name, details, price, _id } = productData;

  return (
    <div>
      <div className="product-detail-container">
        <div className="image-gallery">
          <div className="image-container">
            { image && <img src={urlFor(image[imgIndex])} className='product-detail-image'/> }
          </div>
          <div className="small-image-container">
          { image && image?.map((img, index) => (
            <img src={urlFor(img)} key={index} className={index === imgIndex ? 'small-image selected-image' : 'small-image'} onMouseEnter={() => setImgIndex(index)}/>
          )) }
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              <AiOutlineStar/>
            </div>
            <p>(20)</p>
          </div>
          <h4>Details</h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decrementQty}>
                <AiOutlineMinus/>
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incrementQty}>
                <AiOutlinePlus/>
              </span>
            </p>
          </div>
          <div className="buttons">
            <button className="add-to-cart btn" onClick={() => onAdd(productData, qty)}>Add To Cart</button>
            <button className="buy-now btn">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapepr">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track"></div>
          </div>
      </div>
    </div>
  )
}

export default ProductDetail