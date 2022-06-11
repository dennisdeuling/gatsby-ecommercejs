import React from 'react';

// component
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

// styles components
import { Header } from './Navigation.styles';

function Navigation() {
	return (
		<Header>
			<Logo />
			<Menu />
		</Header>
	);
}

export default Navigation;
