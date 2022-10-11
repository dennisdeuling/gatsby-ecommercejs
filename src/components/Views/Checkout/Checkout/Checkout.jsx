import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// components
import AddressForm from '../../../Form/Checkout/AddressForm/AddressForm';
import InputField from '../../../Form/InputField/InputField';
import SelectField from '../../../Form/Checkout/SelectField/SelectField';
import FormButton from '../../../Form/Buttons/FormButton/FormButton';

// hooks
import { useCart } from '../../../../hooks/CartContext';

// styles
import { Wrapper, Fieldset, Legend } from './Checkout.styles';

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
	};

	const handleCheckbox = event => {
		const { checked: isChecked } = event.target;

		setIsChecked(isChecked);
	};

	// Create a function that can be called when a "complete order" button is clicked
	const captureOrder = async event => {
		event.preventDefault();
		let billing, shipping, customer, fulfillment, order;

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
			order = await commerce.checkout.capture(checkoutData.id, {
				customer: customer,
				billing: billing,
				shipping: shipping ? shipping : billing,
				fulfillment: fulfillment,
				payment: payment
			});
		} catch (response) {
			console.log(response);
			alert(response.message);
		} finally {
			// Any loading state can be removed here.
			await navigate('/purchase', {
				state: { order }
			});
		}
	};

	return (
		<Wrapper>
			<form onSubmit={event => captureOrder(event)}>
				<div>
					<h1>Addresses</h1>
					<Fieldset>
						<Legend>Your Billing address:</Legend>
						<AddressForm handleOnChangeAddress={handleOnChangeAddress} typeOfAddress="billing" />
						<SelectField
							methods={checkoutData?.shipping_methods}
							typeOfAddress="billing"
							handleOnChange={handleOnChangeShipping}
						/>
					</Fieldset>
					<InputField
						label="Add a different Shipping address"
						type="checkbox"
						handleCheckbox={handleCheckbox}
					/>
					{isChecked && (
						<Fieldset>
							<Legend>Your Shipping address:</Legend>
							<AddressForm handleOnChangeAddress={handleOnChangeAddress} typeOfAddress="shipping" />
							<SelectField
								typeOfAddress="shipping"
								methods={checkoutData?.shipping_methods}
								handleOnChange={handleOnChangeShipping}
							/>
						</Fieldset>
					)}
				</div>
				<div>
					<Fieldset>
						<Legend>Your Payment:</Legend>
						<CardElement />
					</Fieldset>
				</div>
				<FormButton fullWidth type="submit">
					Order
				</FormButton>
			</form>
		</Wrapper>
	);
}

export default Checkout;
