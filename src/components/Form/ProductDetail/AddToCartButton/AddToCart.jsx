import React from 'react';

// styles
import { AddToCartButton } from './AddToCart.styles';

function AddToCart({ ...props }) {
	const handleAddToCart = () => {
		props.handleAddToCart();
	};

	return <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>;
}

export default AddToCart;
