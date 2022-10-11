import React, { useState, useContext, useEffect } from 'react';

// ecommerce settings
import commerce from '../ecommerce_settings/ecommcejs';

// contexts
const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

// custom hooks
export const useCart = () => useContext(CartContext);
export const useUpdateCart = () => useContext(CartUpdateContext);

function CartProvider({ children }) {
	const [cart, setCart] = useState();

	useEffect(() => {
		const { pathname } = window.location;

		if(!pathname.includes('purchase')) {
			commerce.cart.retrieve().then(cart => setCart(cart));
		}

	}, []);

	const updateContext = (action, id, quantity) => {
		action = action.toLowerCase();

		switch (action) {
			case 'add':
				commerce.cart
					.add(`${id}`, quantity)
					.then(response =>
						setCart(prevState => (prevState !== response.cart ? response.cart : prevState))
					);
				break;
			case 'update':
				commerce.cart
					.update(`${id}`, { quantity: quantity })
					.then(response =>
						setCart(prevState => (prevState !== response.cart ? response.cart : prevState))
					);
				break;
			case 'removeItem':
				commerce.cart
					.remove(`${id}`)
					.then(response =>
						setCart(prevState => (prevState !== response.cart ? response.cart : prevState))
					);
				break;
			case 'refreshCart':
				commerce.cart.refresh().then(cart => setCart(cart));
				break;
			case 'emptyCart':
				commerce.cart
					.empty()
					.then(response =>
						setCart(prevState => (prevState !== response.cart ? response.cart : prevState))
					);
				break;
			default:
				console.log('Something went wrong, please check the code');
				break;
		}
	};

	return (
		<CartContext.Provider value={cart}>
			<CartUpdateContext.Provider value={updateContext}>{children}</CartUpdateContext.Provider>
		</CartContext.Provider>
	);
}

export default CartProvider;
