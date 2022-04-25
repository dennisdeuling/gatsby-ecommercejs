import React from 'react';
import { graphql } from 'gatsby';

// components
import Layout from '../../components/Layout/Layout';
import ProductDetail from '../../components/Products/ProductDetail/ProductDetail';

function ProductDetailPage({ data }) {
	const product = data.checProduct;

	return (
		<Layout>
			<ProductDetail product={product} />
		</Layout>
	);
}

export const query = graphql`
	query ($id: String!) {
		checProduct(active: { eq: true }, id: { eq: $id }) {
			name
			description
			permalink
			sku(formatString: "")
			categories {
				slug
			}
			image {
				url
			}
			price {
				formatted
				formatted_with_code
				formatted_with_symbol
				raw
			}
		}
	}
`;

export default ProductDetailPage;
