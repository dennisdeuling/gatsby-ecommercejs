import React from 'react';

// styled components
import { List, ListItem } from './Menu.styles';
import { StaticImage } from 'gatsby-plugin-image';

function Menu() {
	return (
		<nav>
			<List>
				<ListItem>Weapons</ListItem>
				<ListItem>Armor</ListItem>
				<ListItem>Items</ListItem>
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
