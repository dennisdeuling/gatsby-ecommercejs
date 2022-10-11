import React from 'react';

// styles
import {
	ProductCardDescription,
	ProductCardHeadline,
	ProductCardImage,
	ProductCardWrapper
} from './ProductCard.styles';
import { CustomLink } from '../../../Link/Link.styles';

function ProductCard(props) {
	const { image, headline, description, link } = props;

	return (
		<ProductCardWrapper>
			<CustomLink to={`/${link}`} color="black">
				<ProductCardImage src={image} alt={headline} />
				<ProductCardHeadline>{headline}</ProductCardHeadline>
				<ProductCardDescription>{description}</ProductCardDescription>
			</CustomLink>
		</ProductCardWrapper>
	);
}

export default ProductCard;
