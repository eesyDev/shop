import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className='navbar-container'>
        <Link to="/">AminaTechnoShop</Link>
        <button className='cart-icon'>
            <AiOutlineShopping/>
            <span className="cart-item-qty">5</span>
        </button>
    </div>
  )
}

export default Header