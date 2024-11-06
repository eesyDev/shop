import React, { useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Cart from './Cart';
import { useStateContext } from '../context/StateContext';

const Header = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  
  return (
    <div className='navbar-container'>
        <Link to="/">AminaTechnoShop</Link>
        <button className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping/>
            <span className="cart-item-qty">{totalQty}</span>
        </button>
        {
          showCart && <Cart setShowCart={setShowCart}/>
        }
    </div>
  )
}

export default Header