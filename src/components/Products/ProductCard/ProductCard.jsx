import React from 'react';

// styles
import {
	ProductDescription,
	ProductHeadline,
	ProductImage,
	ProductWrapper
} from './ProductCard.styles';
import { CustomLink } from '../../Link/Link.styles';

function ProductCard(props) {
	const { image, headline, description, price, link } = props;

	return (
		<ProductWrapper>
			<CustomLink to={`/${link}`}>
				<ProductImage src={image} alt={headline} />
				<ProductHeadline>{headline}</ProductHeadline>
				<ProductDescription dangerouslySetInnerHTML={{ __html: description }} />
				{/*<p>{price}</p>*/}
			</CustomLink>
		</ProductWrapper>
	);
}

export default ProductCard;
