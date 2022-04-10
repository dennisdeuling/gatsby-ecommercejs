import React from 'react';
import { graphql } from 'gatsby';

function ProductDetail({ data }) {
	console.log(data);
	return <div></div>;
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

export default ProductDetail;
