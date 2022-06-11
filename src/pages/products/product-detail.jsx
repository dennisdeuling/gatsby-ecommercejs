import React from 'react';
import { graphql } from 'gatsby';

// components
import Layout from '../../components/Views/Layout/Layout';
import ProductDetail from '../../components/Views/Products/ProductDetail/ProductDetail';

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
			id
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
