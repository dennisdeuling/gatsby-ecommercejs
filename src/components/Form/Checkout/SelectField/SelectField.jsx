import React from 'react';

import { Label, Option, Select, Wrapper } from './SelectField.styles';

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
			<Wrapper>
				<Label htmlFor="shipping-method">Country</Label>
				<Select
					name="shipping-method"
					id="shipping-method"
					onChange={event => handleOnSelect(event)}
				>
					<Option key="choose" value="choose">
						-- Country --
					</Option>
					{shippingMethods}
				</Select>
			</Wrapper>
		</React.Fragment>
	);
}

export default SelectField;
