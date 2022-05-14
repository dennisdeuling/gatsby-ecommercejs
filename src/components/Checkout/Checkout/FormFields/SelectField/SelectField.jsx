import React from 'react';

function SelectField({ ...props }) {
	const { methods } = props;

	const handleOnSelect = event => {
		const { value } = event.target;

		if (value !== 'choose') {
			const method = methods.filter(shippingMethod => shippingMethod.description === value);
			props.handleOnChange(method, props.typeOfAddress);
		} else {
			return null;
		}
	};

	let shippingMethods;

	if (methods) {
		shippingMethods = methods.map(method => {
			return (
				<option key={method.id} value={method.description}>
					{method.description}
				</option>
			);
		});
	}

	return (
		<React.Fragment>
			<label htmlFor="shipping-method">Country</label>
			<select name="shipping-method" id="shipping-method" onChange={event => handleOnSelect(event)}>
				<option key="choose" value="choose">
					-- Country --
				</option>
				{shippingMethods}
			</select>
		</React.Fragment>
	);
}

export default SelectField;
