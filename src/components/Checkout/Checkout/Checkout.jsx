import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// components
import AddressForm from './AddressForm/AddressForm';
import InputField from './FormFields/InputField/InputField';
import SelectField from './FormFields/SelectField/SelectField';

// hooks
import { useCart } from '../../../hooks/CartContext';

// styles

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
	}, [cart, commerce.checkout]);

	const handleOnChangeAddress = (name, value, typeOfAddress) => {
		setAddress(prevState => {
			return {
				...prevState,
				[typeOfAddress]: {
					...prevState?.billing,
					...prevState?.shipping,
					[name]: value
				}
			};
		});
	};

	const handleOnChangeShipping = (method, typeOfAddress) => {
		setAddress(prevState => {
			return {
				...prevState,
				[typeOfAddress]: {
					...prevState?.billing,
					...prevState?.shipping,
					method
				}
			};
		});
		console.log(method);
	};

	const handleCheckbox = event => {
		const { checked: isChecked } = event.target;

		setIsChecked(isChecked);
	};

	// Create a function that can be called when a "complete order" button is clicked
	const captureOrder = async event => {
		event.preventDefault();
		let billing, shipping, customer, fulfillment;

		if (address.billing) {
			const {
				firstname: billingFirstname,
				lastname: billingLastname,
				zipcode: billingZipcode,
				street: billingStreet,
				city: billingCity,
				email
			} = address.billing;

			const billingCountry = address.billing.method[0].countries[0];

			const billingRandomState =
				address.billing.method[0].regions[billingCountry][
					Math.floor(Math.random() * address.billing.method[0].regions[billingCountry].length)
				];

			customer = {
				firstname: billingFirstname,
				lastname: billingLastname,
				email: email
			};

			billing = {
				name: `${billingFirstname} ${billingLastname}`,
				email: email,
				street: billingStreet,
				town_city: billingCity,
				county_state: billingRandomState,
				postal_zip_code: billingZipcode,
				country: billingCountry
			};

			fulfillment = {
				shipping_method: address.billing.method[0].id
			};
		}

		if (address.shipping) {
			const {
				firstname: shippingFirstname,
				lastname: shippingLastname,
				zipcode: shippingZipcode,
				street: shippingStreet,
				city: shippingCity
			} = address.shipping;

			const shippingCountry = address.shipping.method[0].countries[0];

			const shippingRandomState =
				address.shipping.method[0].regions[shippingCountry][
					Math.floor(Math.random() * address.shipping.method[0].regions[shippingCountry].length)
				];

			shipping = {
				name: `${shippingFirstname} ${shippingLastname}`,
				street: shippingStreet,
				town_city: shippingCity,
				county_state: shippingRandomState,
				postal_zip_code: shippingZipcode,
				country: shippingCountry
			};

			fulfillment = {
				shipping_method: address.shipping.method[0].id
			};
		}

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

		const payment = {
			gateway: 'stripe',
			stripe: {
				payment_method_id: paymentMethodResponse.paymentMethod.id
			}
		};

		try {
			// Use a checkout token ID generated that was generated earlier, and any order details that may have been collected
			// on this page. Note that Commerce.js checkout tokens may already have all the information saved against them to
			// capture an order, so this extra detail may be optional.
			const order = await commerce.checkout.capture(checkoutData.id, {
				customer: customer,
				billing: billing,
				shipping: shipping ? shipping : billing,
				fulfillment: fulfillment,
				payment: payment
			});

			// If we get here, the order has been successfully captured and the order detail is part of the `order` variable
			console.log(order);
		} catch (response) {
			// There was an issue with capturing the order with Commerce.js
			console.log(response);
			alert(response.message);
		} finally {
			// Any loading state can be removed here.
		}
	};

	console.log(address);
	return (
		<form onSubmit={event => captureOrder(event)}>
			<div>
				<h1>Addresses</h1>
				<fieldset>
					<legend>Your Billing address:</legend>
					<AddressForm handleOnChangeAddress={handleOnChangeAddress} typeOfAddress="billing" />
					<SelectField
						methods={checkoutData?.shipping_methods}
						typeOfAddress="billing"
						handleOnChange={handleOnChangeShipping}
					/>
				</fieldset>
				<InputField
					label="Add a different Shipping address"
					type="checkbox"
					handleCheckbox={handleCheckbox}
				/>
				{isChecked && (
					<fieldset>
						<legend>Your Shipping address:</legend>
						<AddressForm handleOnChangeAddress={handleOnChangeAddress} typeOfAddress="shipping" />
						<SelectField
							typeOfAddress="shipping"
							methods={checkoutData?.shipping_methods}
							handleOnChange={handleOnChangeShipping}
						/>
					</fieldset>
				)}
			</div>
			<div>
				<fieldset>
					<legend>Your Payment:</legend>
					<CardElement />
				</fieldset>
				<button type="submit">Order</button>
			</div>
		</form>
	);
}

export default Checkout;
