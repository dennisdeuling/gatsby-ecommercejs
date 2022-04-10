import React from 'react';

// components
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

// global style
import '../../assets/fonts/font.css';
import { GlobalStyle } from './GlobalStyle';

function Layout({ children }) {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Navigation />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
}

export default Layout;
