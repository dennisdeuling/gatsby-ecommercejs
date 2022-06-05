import React from 'react';

// styled
import {
	ProductWrapper,
	Price,
	Product,
	ProductImage,
	ProductHeadline
} from './ProductOverview.styles';

// import helpers
import { formatPriceEUR } from '../../../../helpers/helpers';

function ProductOverview({ ...props }) {
	const product = props.product;

	return (
		<React.Fragment>
			<ProductWrapper>
				<div>
					<ProductImage
						src={product.image.url}
						alt={product.product_name}
						width={product.image.image_dimensions.width}
						height={product.image.image_dimensions.height}
					/>
				</div>
				<Product>
					<ProductHeadline>{product.product_name}</ProductHeadline>
					<Price>
						<p>{product.quantity}</p>
						<p>{formatPriceEUR(product.price.raw * product.quantity)}</p>
					</Price>
				</Product>
			</ProductWrapper>
		</React.Fragment>
	);
}

export default ProductOverview;
