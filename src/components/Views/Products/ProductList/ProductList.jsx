import React from 'react';

// components
import ProductCard from '../ProductCard/ProductCard';

// styles
import { ProductListWrapper } from './ProductList.styles';

function ProductList(props) {
	const { products } = props;

	const productList = products.map(product => {
		return (
			<ProductCard
				key={product.sku}
				image={product.image.url}
				headline={product.name}
				description={product.description}
				price={product.price}
				sku={product.sku}
				link={product.permalink}
			/>
		);
	});
	return <ProductListWrapper>{productList}</ProductListWrapper>;
}

export default ProductList;
