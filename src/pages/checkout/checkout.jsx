import React from 'react';
import { Elements } from '@stripe/react-stripe-js';

// ecommerce settings
import commerce from '../../ecommerce_settings/ecommcejs';
import stripe from '../../ecommerce_settings/stripe';

// components
import Checkout from '../../components/Checkout/Checkout/Checkout';

// context
import CartProvider from '../../hooks/CartContext';
const StripeContext = ({ children }) => <Elements stripe={stripe}>{children}</Elements>;

function CheckoutPage() {
	return (
		<CartProvider>
			<StripeContext>
				<Checkout commerce={commerce} />
			</StripeContext>
		</CartProvider>
	);
}

export default CheckoutPage;
