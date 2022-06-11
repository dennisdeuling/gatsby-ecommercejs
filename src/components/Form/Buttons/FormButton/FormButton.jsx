import React from 'react';

// styles
import { StyledButton } from '../Button.styles';

function FormButton({ children, ...props }) {
	return (
		<React.Fragment>
			<StyledButton type={props ? props.type : 'button'}>{children}</StyledButton>
		</React.Fragment>
	);
}

export default FormButton;
