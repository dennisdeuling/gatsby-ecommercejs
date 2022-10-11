import React from 'react';

// styles
import {
	ProductCardDescription,
	ProductCardHeadline,
	ProductCardImage,
	ProductCardWrapper
} from './ProductCard.styles';
import { CustomLink } from '../../../Link/Link.styles';

import {descriptionWithoutHTML} from '../../../../helpers/helpers'

function ProductCard(props) {
	const { image, headline, description, link } = props;

	return (
		<ProductCardWrapper>
			<CustomLink to={`/${link}`} color="black">
				<ProductCardImage src={image} alt={headline} />
				<ProductCardHeadline>{headline}</ProductCardHeadline>
				<ProductCardDescription>{descriptionWithoutHTML(description)}</ProductCardDescription>
			</CustomLink>
		</ProductCardWrapper>
	);
}

export default ProductCard;
