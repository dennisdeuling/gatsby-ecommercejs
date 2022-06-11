import React from 'react';

// components
import InputField from '../../InputField/InputField';

function AddressForm({ ...props }) {
	const handleOnChangeAddress = event => {
		const { name, value } = event.target;
		const { typeOfAddress } = props;
		props.handleOnChangeAddress(name, value, typeOfAddress);
	};

	return (
		<React.Fragment>
			<InputField label="Firstname" type="text" handleOnChange={handleOnChangeAddress} />
			<InputField label="Lastname" type="text" handleOnChange={handleOnChangeAddress} />
			<InputField label="Email" type="text" handleOnChange={handleOnChangeAddress} />
			<InputField label="Street" type="text" handleOnChange={handleOnChangeAddress} />
			<InputField label="Zipcode" type="text" handleOnChange={handleOnChangeAddress} />
			<InputField label="City" type="text" handleOnChange={handleOnChangeAddress} />
		</React.Fragment>
	);
}

export default AddressForm;
