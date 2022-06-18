import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

function Logo() {
	return (
		<Link to="/">
			<StaticImage
				src="../../../../../assets/images/logo/link-logo.png"
				alt="Links item shop"
				placeholder="blurred"
				layout="fixed"
				height={100}
			/>
		</Link>
	);
}

export default Logo;
