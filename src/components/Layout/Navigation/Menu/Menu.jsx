import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

// styled components
import { List, ListItem, Badge } from './Menu.styles';
import { CustomLink } from '../../../Link/Link.styles';

// hooks
import useMenuQuery from '../../../../hooks/useMenuQuery';
import { useCart } from '../../../../hooks/CartContext';

// helper functions
import { capitalize } from '../../../../helper_functions/helper_functions';

function Menu() {
	const categories = useMenuQuery();
	const cart = useCart();

	const categoriesList = categories.map(category => {
		return (
			<ListItem key={category.id}>
				<CustomLink to={`/${category.slug}`}>{`${capitalize(category.name)}s`}</CustomLink>
			</ListItem>
		);
	});

	return (
		<nav>
			<List>
				{categoriesList}
				<ListItem>
					<CustomLink to="/cart">
						{cart?.total_items > 0 && (
							<Badge>
								{cart.total_items > 0 && cart.total_items < 10
									? `0${cart.total_items}`
									: cart.total_items}
							</Badge>
						)}
						{cart?.line_items.length === 0 ? (
							<StaticImage
								src="../../../../assets/icons/empty_shopping_cart_black_24dp.svg"
								alt="Empty shopping-cart"
							/>
						) : (
							<StaticImage
								src="../../../../assets/icons/filled_shopping_cart_black_24dp.svg"
								alt="Filled shopping-cart"
							/>
						)}
					</CustomLink>
				</ListItem>
			</List>
		</nav>
	);
}

export default Menu;
