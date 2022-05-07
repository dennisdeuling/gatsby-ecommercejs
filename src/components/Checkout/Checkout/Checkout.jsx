import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// components
import AddressForm from './AddressForm/AddressForm';
import InputField from './FormFields/InputField/InputField';
import SelectField from './FormFields/SelectField/SelectField';

// hooks
import { useCart } from '../../../hooks/CartContext';

// styles
import { Wrapper } from './Checkout.styles';

function Checkout({ ...props }) {
	const { commerce } = props;
	const cart = useCart();
	const stripeElements = useElements();
	const stripe = useStripe();
	const [address, setAddress] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const [checkoutData, setCheckoutData] = useState(null);

	useEffect(() => {
		if (cart) {
			commerce.checkout
				.generateToken(cart.id, { type: 'cart' })
				.then(checkout => setCheckoutData(checkout))
				.catch(error => console.log(error));
		}
	}, [cart]);

	const handleOnChange = (name, value, typeOfAddress) => {
		setAddress(prevState => {
			return {
				...prevState,
				[typeOfAddress]: {
					...prevState?.billing,
					[name]: value
				}
			};
		});
	};

	const handleCheckbox = event => {
		const { checked: isChecked } = event.target;

		setIsChecked(isChecked);
	};

	// Create a function that can be called when a "complete order" button is clicked
	async function captureOrder() {
		const orderDetails = '';
		// This process includes a few API calls, so now is a good time to show a loading indicator

		// Create a payment method using the card element on the page
		const paymentMethodResponse = await stripe.createPaymentMethod({
			type: 'card',
			card: stripeElements.getElement(CardElement)
		});

		if (paymentMethodResponse.error) {
			// There was some issue with the information that the customer entered into the payment details form.
			alert(paymentMethodResponse.error.message);
			return;
		}

		try {
			// Use a checkout token ID generated that was generated earlier, and any order details that may have been collected
			// on this page. Note that Commerce.js checkout tokens may already have all the information saved against them to
			// capture an order, so this extra detail may be optional.
			const order = await commerce.checkout.capture(checkoutData.id, {
				...orderDetails,
				// Include Stripe payment method ID:
				payment: {
					gateway: 'stripe',
					stripe: {
						payment_method_id: paymentMethodResponse.paymentMethod.id
					}
				}
			});

			// If we get here, the order has been successfully captured and the order detail is part of the `order` variable
			console.log(order);
			return;
		} catch (response) {
			// There was an issue with capturing the order with Commerce.js
			console.log(response);
			alert(response.message);
			return;
		} finally {
			// Any loading state can be removed here.
		}
	}

	console.log(checkoutData);
	return (
		<Wrapper>
			<div>
				<h1>Addresses</h1>
				<fieldset>
					<legend>Your Billing address:</legend>
					<AddressForm handleOnChange={handleOnChange} typeOfAddress="billing" />
				</fieldset>
				<InputField
					label="Add a different Shipping address"
					type="checkbox"
					handleCheckbox={handleCheckbox}
				/>
				{isChecked && (
					<fieldset>
						<legend>Your Shipping address:</legend>
						<AddressForm handleOnChange={handleOnChange} typeOfAddress="shipping" />
					</fieldset>
				)}
			</div>
			<div>
				<h1>Shipping</h1>
				<fieldset>
					<legend>Your Shipping country:</legend>
					<SelectField methods={checkoutData?.shipping_methods} />
				</fieldset>
				<fieldset>
					<legend>Your Payment:</legend>
					<CardElement />
				</fieldset>
			</div>
		</Wrapper>
	);
}

export default Checkout;
