import React from 'react';

// context
import CartProvider from '../../../../../hooks/CartContext';

// components
import Navigation from '../Navigation';
import Footer from '../../Footer/Footer';

// styles
import { Main } from './Layout.styles';

// global style
import '../../../../../assets/fonts/font.css';
import { GlobalStyle } from '../../GlobalStyle';

function Layout({ children }) {
	return (
		<React.Fragment>
			<CartProvider>
				<GlobalStyle />
				<Navigation />
				<Main>{children}</Main>
			</CartProvider>
			<Footer />
			<GlobalStyle />
		</React.Fragment>
	);
}

export default Layout;
