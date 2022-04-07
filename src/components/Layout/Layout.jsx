import React from 'react';

import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

function Layout({ children }) {
	return (
		<React.Fragment>
			<Navigation />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
}

export default Layout;
