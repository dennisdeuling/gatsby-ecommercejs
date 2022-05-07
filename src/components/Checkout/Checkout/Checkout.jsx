import React, { useEffect, useState } from 'react';
import Commerce from '@chec/commerce.js';

// components
import AddressForm from './AddressForm/AddressForm';
import InputField from './FormFields/InputField/InputField';
import SelectField from './FormFields/SelectField/SelectField';

// hooks
import { useCart } from '../../../hooks/CartContext';

// styles
import { Wrapper } from './Checkout.styles';

const commerce = new Commerce(process.env.GATSBY_CHEC_PUBLIC_KEY);

function Checkout() {
	const [address, setAddress] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const cart = useCart();
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
			</div>
		</Wrapper>
	);
}

export default Checkout;
