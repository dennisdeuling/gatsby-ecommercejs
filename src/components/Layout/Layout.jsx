import React from 'react';

// context
import CartProvider from '../../hooks/CartContext';

// components
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

// global style
import '../../assets/fonts/font.css';
import { GlobalStyle } from './GlobalStyle';

function Layout({ children }) {
	return (
		<React.Fragment>
			<CartProvider>
				<GlobalStyle />
				<Navigation />
				<main>{children}</main>
			</CartProvider>
			<Footer />
		</React.Fragment>
	);
}

export default Layout;
