import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// import Logo from '../../../../assets/images/logo/link-logo.png';

function Logo() {
	return (
		<StaticImage
			src="../../../../assets/images/logo/link-logo.png"
			alt="Links item shop"
			placeholder="blurred"
			layout="fixed"
			height={100}
		/>
	);
}

export default Logo;
