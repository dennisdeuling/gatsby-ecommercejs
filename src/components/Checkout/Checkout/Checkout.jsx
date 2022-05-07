import React, { useState } from 'react';

// components
import AddressForm from './AddressForm/AddressForm';
import InputField from './FormFields/InputField/InputField';

function Checkout() {
	const [address, setAddress] = useState(null);
	const [isChecked, setIsChecked] = useState(false);

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

	console.log(address);

	return (
		<div>
			<h1>I'm the Checkout Component</h1>
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
	);
}

export default Checkout;
