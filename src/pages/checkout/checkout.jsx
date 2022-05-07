import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// components
import Checkout from '../../components/Checkout/Checkout/Checkout';

// context
import CartProvider from '../../hooks/CartContext';
import Commerce from '@chec/commerce.js';
const StripeContext = ({ children }) => <Elements stripe={stripe}>{children}</Elements>;

const commerce = new Commerce(process.env.GATSBY_CHEC_PUBLIC_KEY);
const stripe = loadStripe(process.env.GATSBY_STRIPE_PUBLIC_KEY);

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
