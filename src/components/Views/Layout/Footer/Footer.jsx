import React from 'react';

// styles
import { FooterStyled, List, ListItem } from './Footer.styles';
import { CustomLink } from '../../../Link/Link.styles';

function Footer() {
	return (
		<FooterStyled>
			<List>
				<ListItem>
					<CustomLink to="/impressum" color="white">
						Impressum
					</CustomLink>
				</ListItem>
				<ListItem>
					<CustomLink to="/agb" color="white">
						AGB
					</CustomLink>
				</ListItem>
				<ListItem>
					<CustomLink to="/datenschutz" color="white">
						Datenschutz
					</CustomLink>
				</ListItem>
				<ListItem>
					<CustomLink to="/dateneinstellungen" color="white">
						Dateneinstellungen
					</CustomLink>
				</ListItem>
			</List>
			<List>
				<ListItem>Twitter</ListItem>
				<ListItem>Facebook</ListItem>
				<ListItem>Instagram</ListItem>
				<ListItem>Pinterest</ListItem>
			</List>
		</FooterStyled>
	);
}

export default Footer;
