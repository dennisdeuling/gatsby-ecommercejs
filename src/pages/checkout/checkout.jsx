import React from 'react';

// components
import Checkout from '../../components/Checkout/Checkout/Checkout';

// context
import CartProvider from '../../hooks/CartContext';

function CheckoutPage() {
	return (
		<CartProvider>
			<Checkout />
		</CartProvider>
	);
}

export default CheckoutPage;
