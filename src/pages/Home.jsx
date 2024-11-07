import React, { useEffect, useState } from 'react';
import { client } from '../utils/client';
import Hero from '../components/Hero';
import Product from '../components/Product';
import BottomBanner from '../components/BottomBanner';

const Home = () => {
    const [bannerData, setBannerData] = useState({});
    const [bannerData2, setBannerData2] = useState({});
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        client.fetch('*[_type == "banner"]').then(data => setBannerData(data[1]));

        client.fetch('*[_type == "product"]').then(data => setProductData(data));
        
        client.fetch('*[_type == "banner"]').then(data => setBannerData2(data[0]));
    }, []);

    console.log(bannerData2)
  return (
    <div>
      <Hero
        midText={bannerData.midText}
        largeText={bannerData.largeText}
        largeText2={bannerData.largeText2}
        buttonText={bannerData.buttonText}
        image={bannerData.image}
        descr={bannerData.description}
        smallText={bannerData.smallText}
      />
      <div className="products-heading">
        <h2>Best selling product</h2>
        <p>Speakers of many variatorss</p>
      </div>
      <div className="products-container">
        {
          productData?.map((product, index) => (
            <Product
              name={product.name}
              slug={product.slug.current}
              image={product.image}
              price={product.price}
            />
          ))
        }
      </div>
      <BottomBanner
        footerBannerData={bannerData2}
      />
    </div>
  )
}

export default Home