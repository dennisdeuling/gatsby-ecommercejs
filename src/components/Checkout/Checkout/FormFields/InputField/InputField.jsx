import React from 'react';

// styled components
import { Input, Label, Wrapper } from './InputField.styles';

function InputField({ ...props }) {
	const { type, label } = props;

	const handleOnChange = event => {
		props.handleOnChange(event);
	};

	const handleCheckbox = event => {
		props.handleCheckbox(event);
	};

	return (
		<React.Fragment>
			{type === 'text' && (
				<Wrapper>
					<Label htmlFor={label.toLowerCase().replace(/ /g, '_')}>{label}</Label>
					<Input
						type={type}
						id={label.toLowerCase().replace(/ /g, '_')}
						name={label.toLowerCase().replace(/ /g, '_')}
						onChange={handleOnChange}
					/>
				</Wrapper>
			)}
			{type === 'checkbox' && (
				<Wrapper>
					<Input
						type={type}
						id={label.toLowerCase()}
						name={label.toLowerCase()}
						onClick={handleCheckbox}
					/>
					<Label htmlFor={label.toLowerCase()}>{label}</Label>
				</Wrapper>
			)}
		</React.Fragment>
	);
}

export default InputField;
