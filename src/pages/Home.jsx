import React, { useEffect, useState } from 'react';
import { client } from '../utils/client';
import Hero from '../components/Hero';

const Home = () => {
    const [bannerData, setBannerData] = useState({});


    useEffect(() => {
        client.fetch('*[_type == "banner"]').then(data => setBannerData(data[1]))
    }, []);

    console.log(bannerData)
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
    </div>
  )
}

export default Home