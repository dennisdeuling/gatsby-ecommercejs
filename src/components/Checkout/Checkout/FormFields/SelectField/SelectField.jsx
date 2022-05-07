import React from 'react';

// helpers
import { formatPriceEUR } from '../../../../../helper_functions/helper_functions';

function SelectField({ ...props }) {
	const { methods } = props;
	let shippingMethods;

	if (methods) {
		shippingMethods = methods.map(method => {
			return (
				<option key={method.id} value={method.description}>
					{method.description} - {formatPriceEUR(method.price.raw)}
				</option>
			);
		});
	}

	return (
		<React.Fragment>
			<label htmlFor="shipping-method">Choose your shipping Country:</label>
			<select name="shipping-method" id="shipping-method">
				<option value="">--Please choose an option--</option>
				{shippingMethods}
			</select>
		</React.Fragment>
	);
}

export default SelectField;
