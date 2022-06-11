import React, { useEffect, useState } from 'react';

// styles
import { QuantityForm, AddAndRemoveButton } from './AddQuantity.styles';

function AddQuantity({ ...props }) {
	const [quantity, setQuantity] = useState(1);

	const handleAddQuantity = () => {
		setQuantity(prevState => prevState + 1);
	};

	const handleRemoveQuantity = () => {
		if (quantity > 1) {
			setQuantity(prevState => prevState - 1);
		}
	};

	const handleChange = event => {
		const { value } = event.target;
		setQuantity(value);
	};

	useEffect(() => {
		props.handleQuantity(quantity);
	}, [quantity]);

	return (
		<div>
			<AddAndRemoveButton onClick={handleRemoveQuantity}>-</AddAndRemoveButton>
			<QuantityForm
				inputMode="numeric"
				type="number"
				value={quantity}
				onChange={event => handleChange(event)}
				required
			/>
			<AddAndRemoveButton onClick={handleAddQuantity}>+</AddAndRemoveButton>
		</div>
	);
}

export default AddQuantity;
