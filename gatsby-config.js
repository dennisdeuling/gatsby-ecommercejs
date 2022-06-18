/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config();

module.exports = {
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `@chec/gatsby-source-chec`,
			options: {
				publicKey: process.env.GATSBY_CHEC_PUBLIC_KEY,
				downloadImageAssets: true
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `icons`,
				path: `${__dirname}/src/assets/icons/`
			}
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-PRQVJKC',
				includeInDevelopment: true
			}
		}
	]
};
