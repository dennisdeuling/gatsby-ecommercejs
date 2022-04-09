import React from 'react';

function ProductCard(props) {
	const { image, headline, description, price } = props;
	return (
		<section>
			<img src={image} alt={headline} />
			<h1>{headline}</h1>
			<p>{description}</p>
			{/*<p>{price}</p>*/}
		</section>
	);
}

export default ProductCard;
