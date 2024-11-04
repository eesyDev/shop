import React from 'react';
import { AiOutlineShopping, AiOutlineRight, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline, TiOutlineDelete } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../utils/client';

const Cart = ({ setShowCart }) => {
	const { cartItems, qty } = useStateContext();
	console.log(cartItems)
	return (
		<div className='cart-wrapper'>
			<div className="cart-container">
				<button className="cart-heading" onClick={() => setShowCart(false)}>
					<AiOutlineRight />
					<span className="heading">Your Cart</span>
					<span className="cart-num-items">4</span>
				</button>
				<div className="product-container">
					{
						cartItems.length > 0 && cartItems?.map((product, index) => (
							<div className="product" key={index}>
								{product?.image && (
									<img src={urlFor(product?.image[0])} alt="" className="cart-product-image" />
								)}

								<div className="item-desc">
									<div className="flex top">
										<h5>{product.name}</h5>
										<h4>{product.price}</h4>
									</div>
									<div className="flex bottom">
										<div>
											<p className="quantity-desc">
												<span className="minus">
													<AiOutlineMinus />
												</span>
												<span className="num">{product.quantity}</span>
												<span className="plus">
													<AiOutlinePlus />
												</span>
											</p>
										</div>
										<button className="remove-item">
											<TiDeleteOutline/>
										</button>
									</div>
								</div>
							</div>
						))
					}
				</div>
				{
					cartItems.length > 0 && (
						<div className="cart-bottom">
							<div className="total">
								<h3>Subtotal: </h3>
								<h3>$600</h3>
							</div>
							<div className="cart btn-container">
								<button className="btn">Go to checkout</button>
							</div>
						</div>
					)
				}
			</div>
		</div>
	)
}

export default Cart