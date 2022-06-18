import React from 'react';
import { graphql } from 'gatsby';

// components
import Layout from '../../components/Views/Layout/Navigation/Layout/Layout';
import ProductList from '../../components/Views/Products/ProductList/ProductList';

function ProductCategoryPage({ data }) {
	const products = data.allChecProduct.edges.map(product => product.node);

	return (
		<Layout>
			<ProductList products={products} />
		</Layout>
	);
}

export const query = graphql`
	query ($category: String!) {
		allChecProduct(
			filter: { active: { eq: true }, categories: { elemMatch: { slug: { eq: $category } } } }
		) {
			edges {
				node {
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
		}
	}
`;

export default ProductCategoryPage;
