import styled from 'styled-components';

export const QuantityForm = styled.input`
	font-family: 'Ubuntu', sans-serif;
	text-align: center;
	font-size: 25px;
	color: black;
	border-radius: 2px;
	border: 0;
	box-shadow: none;
	width: 50px;

	/* Chrome, Safari, Edge, Opera */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	&[type='number'] {
		-moz-appearance: textfield;
	}
`;

export const AddAndRemoveButton = styled.button`
	padding: 1px 10px;
	background-color: darkgray;
	font-size: 25px;
	color: white;
	border-radius: 2px;
	border: 0;
	box-shadow: none;
`;
