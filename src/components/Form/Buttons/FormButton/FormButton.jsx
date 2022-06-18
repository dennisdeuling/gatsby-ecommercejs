import React from 'react';

// styles
import { StyledButton } from '../Button.styles';

function FormButton({ children, ...props }) {
	return (
		<React.Fragment>
			<StyledButton fullWidth onClick={props.onClick} type={props ? props.type : 'button'}>
				{children}
			</StyledButton>
		</React.Fragment>
	);
}

export default FormButton;
