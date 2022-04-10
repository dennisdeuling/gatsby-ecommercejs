import React from 'react';

// styled components
import { List, ListItem } from './Menu.styles';
import { CustomLink } from '../../../Link/Link.styles';
import { StaticImage } from 'gatsby-plugin-image';

// hooks
import useMenuQuery from '../../../../hooks/useMenuQuery';

// helper functions
import { capitalize } from '../../../../helper_functions/helper_functions';

function Menu() {
	const categories = useMenuQuery();

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
					<StaticImage
						src="../../../../assets/icons/filled_shopping_cart_black_24dp.svg"
						alt="Filled Shoppingcart"
					/>
				</ListItem>
				<ListItem>
					<StaticImage
						src="../../../../assets/icons/empty_shopping_cart_black_24dp.svg"
						alt="Empty Shoppingcart"
					/>
				</ListItem>
			</List>
		</nav>
	);
}

export default Menu;
