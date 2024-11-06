import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../utils/client';

const Hero = ({ smallText, midText, largeText, largeText2, image, buttonText, descr }) => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>{smallText}</p>
            <h3>{largeText}</h3>
            <h1>{largeText2}</h1>
            { image && <img src={urlFor(image)} className='hero-banner-image'/> }
            <div>
              <Link>
                <button className='btn btn--primary'>
                  {buttonText}
                </button>
              </Link>
              <div className="desc">
                <h5>{midText}</h5>
                <p>{descr}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero