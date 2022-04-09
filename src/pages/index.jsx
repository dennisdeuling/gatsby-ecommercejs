import React from 'react';
import { graphql } from 'gatsby';

// components
import Layout from '../components/Layout/Layout';
import ProductList from '../components/Products/ProductList/ProductList';

function IndexPage({ data }) {
	const products = data.allChecProduct.edges.map(product => product.node);

	return (
		<Layout>
			<div>Hello world!</div>
			<ProductList products={products} />
		</Layout>
	);
}

export const query = graphql`
	{
		allChecProduct(filter: { active: { eq: true } }) {
			edges {
				node {
					description
					image {
						url
					}
					name
					permalink
					price {
						formatted
						formatted_with_code
						formatted_with_symbol
						raw
					}
					sku(formatString: "")
				}
			}
		}
	}
`;

export default IndexPage;
