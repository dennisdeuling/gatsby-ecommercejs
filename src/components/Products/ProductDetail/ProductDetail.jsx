import React, { useState } from 'react';

// helper function
import { formatPriceEUR } from '../../../helpers/helpers';

// components
import AddToCart from './AddToCartButton/AddToCart';
import AddQuantity from './AddQuantity/AddQuantity';

// hooks
// import useCart from '../../../hooks/useCart';

// styles
import {
	ProductDetailDescription,
	ProductDetailHeadline,
	ProductDetailImage,
	ProductDetailWrapper,
	ProductDetailTextWrapper,
	ProductDetailButtons,
	ProductDetailPrice
} from './ProductDetail.styles';
import { useUpdateCart } from '../../../hooks/CartContext';

function ProductDetail({ product }) {
	const [quantity, setQuantity] = useState();
	const handleAddToCart = useUpdateCart();

	const handleQuantity = quantity => {
		setQuantity(quantity);
	};

	return (
		<ProductDetailWrapper>
			<ProductDetailImage src={product.image.url} />
			<ProductDetailTextWrapper>
				<ProductDetailHeadline>{product.name}</ProductDetailHeadline>
				<ProductDetailDescription dangerouslySetInnerHTML={{ __html: product.description }} />
				<ProductDetailButtons>
					<AddQuantity handleQuantity={handleQuantity} />
					<ProductDetailPrice>{`${formatPriceEUR(
						quantity * product.price.raw
					)}`}</ProductDetailPrice>
					<AddToCart handleAddToCart={() => handleAddToCart('add', product.id, quantity)} />
				</ProductDetailButtons>
			</ProductDetailTextWrapper>
		</ProductDetailWrapper>
	);
}

export default ProductDetail;
