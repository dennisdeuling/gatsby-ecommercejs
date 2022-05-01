import React from 'react';

// import helpers
import { formatPriceEUR } from '../../../../helper_functions/helper_functions';

function ProductTable({ ...props }) {
	const product = props.product;

	return (
		<React.Fragment>
			<tr>
				<td>
					<img
						src={product.image.url}
						alt={product.product_name}
						width={product.image.image_dimensions.width / 3}
						height={product.image.image_dimensions.height / 3}
					/>
				</td>
				<td>{product.product_name}</td>
				<td>{formatPriceEUR(product.price.raw)}</td>
				<td>{product.quantity}</td>
				<td>{formatPriceEUR(product.price.raw * product.quantity)}</td>
			</tr>
		</React.Fragment>
	);
}

export default ProductTable;
