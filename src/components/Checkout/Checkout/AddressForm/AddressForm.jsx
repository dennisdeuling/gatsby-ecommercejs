import React from 'react';

// components
import InputField from '../FormFields/InputField/InputField';

function AddressForm({ ...props }) {
	const handleOnChange = event => {
		const { name, value } = event.target;
		const { typeOfAddress } = props;
		props.handleOnChange(name, value, typeOfAddress);
	};

	return (
		<React.Fragment>
			<InputField label="Firstname" type="text" handleOnChange={handleOnChange} />
			<InputField label="Secondname" type="text" handleOnChange={handleOnChange} />
			<InputField label="Email" type="text" handleOnChange={handleOnChange} />
			<InputField label="Street and Nr." type="text" handleOnChange={handleOnChange} />
			<InputField label="Zipcode" type="text" handleOnChange={handleOnChange} />
			<InputField label="City" type="text" handleOnChange={handleOnChange} />
			<InputField label="Country" type="text" handleOnChange={handleOnChange} />
		</React.Fragment>
	);
}

export default AddressForm;
