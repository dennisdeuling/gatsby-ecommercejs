import React from 'react';

// styles
import { StyledButtonLink } from '../Button.styles';

function LinkButton({ children, ...props }) {
	console.log(props);
	return (
		<React.Fragment>
			<StyledButtonLink to={props.to}>{children}</StyledButtonLink>
		</React.Fragment>
	);
}

export default LinkButton;
