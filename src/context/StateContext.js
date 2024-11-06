import React, { useState, useContext, createContext } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const onAdd = (product, qty) => {
        const checkProd = cartItems.find(item => item._id === product._id);

        setTotalQty(prevTotalQty => prevTotalQty + qty);
        setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * qty);

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

    let foundProd;

    const toggleCartItemQty = (id, action) => {
        foundProd = cartItems.find(item => item._id === id);

        const filteredCartItems = cartItems.filter(item => item._id !== id)

        if (action === 'inc') {
            setCartItems([...filteredCartItems, { ...foundProd, quantity: foundProd.quantity + 1 }]);
            setTotalQty(prevTotalQty => prevTotalQty + 1);
            setTotalPrice(prevTotalPrice => prevTotalPrice + foundProd.price);
        } else if (action === 'dec') {
            if (foundProd.quantity > 1) {
                setCartItems([...filteredCartItems, { ...foundProd, quantity: foundProd.quantity - 1 }])
            }
        } else {
            return
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

    const deleteItem = (id) => {
        const filteredCartItems = cartItems.filter(item => item._id !== id);
        foundProd = cartItems.find(item => item._id === id);

        setCartItems(filteredCartItems);
        setTotalQty(prevTotalQty => prevTotalQty - foundProd.quantity)
        setTotalPrice(prevTotalPrice => prevTotalPrice - (foundProd.price * foundProd.quantity))
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
                decrementQty, 
                toggleCartItemQty,
                totalPrice,
                totalQty,
                deleteItem
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)