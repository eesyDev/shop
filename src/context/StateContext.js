import React, { useState, useContext, createContext } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1)

    const onAdd = (product, qty) => {
        const checkProd = cartItems.find(item => item._id === product._id)
        if (checkProd) {
            const updatedCartItems = cartItems?.map(item => {
                console.log(item.quantity, 'qty: ', qty)
                return {...item, quantity: item.quantity + qty}
            });
            setCartItems(updatedCartItems);
        } else {
            product.quantity = qty
            setCartItems([...cartItems, {...product}]);
            // setShowCart(true)
        }
    }

    const incrementQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    const decrementQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) {
                return 1
            } else {
                return prevQty - 1
            }
        })
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                onAdd,
                qty,
                setQty,
                incrementQty,
                decrementQty
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)