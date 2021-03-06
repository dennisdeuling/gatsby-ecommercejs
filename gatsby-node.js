exports.createPages = async ({ actions, graphql }) => {
	const { data } = await graphql(`
		query AllProducts {
			allChecProduct(filter: { active: { eq: true } }) {
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
	`);

	data.allChecProduct.edges.forEach(product => {
		actions.createPage({
			path: `/${product.node.permalink}`,
			component: require.resolve('./src/pages/products/product-detail.jsx'),
			context: { id: product.node.id }
		});
	});

	data.allChecProduct.edges.forEach(product => {
		actions.createPage({
			path: `/${product.node.categories[0].slug}`,
			component: require.resolve('./src/pages/products/product-category.jsx'),
			context: { category: product.node.categories[0].slug }
		});
	});

	actions.createPage({
		path: `/cart`,
		component: require.resolve('./src/pages/checkout/cart-overview.jsx'),
		context: {}
	});

	actions.createPage({
		path: `/checkout`,
		component: require.resolve('./src/pages/checkout/checkout.jsx'),
		context: {}
	});

	actions.createPage({
		path: `/purchase`,
		component: require.resolve('./src/pages/checkout/purchase-success.jsx'),
		context: {}
	});

	actions.createPage({
		path: `/impressum`,
		component: require.resolve('./src/pages/footer/impressum.jsx'),
		context: {}
	});

	actions.createPage({
		path: `/agb`,
		component: require.resolve('./src/pages/footer/agb.jsx'),
		context: {}
	});

	actions.createPage({
		path: `/datenschutz`,
		component: require.resolve('./src/pages/footer/datenschutz.jsx'),
		context: {}
	});

	actions.createPage({
		path: `/dateneinstellungen`,
		component: require.resolve('./src/pages/footer/dateneinstellungen.jsx'),
		context: {}
	});
};
