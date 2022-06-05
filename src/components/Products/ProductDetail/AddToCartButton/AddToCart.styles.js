import styled from 'styled-components';

export const AddToCartButton = styled.button`
	padding: 10px 13px;
	margin-left: 20px;
	font-size: 25px;
	color: white;
	border: none;
	background-color: #f85c70;
	border-radius: 0.4em;
	box-shadow: 0 0.5em 1em rgba(228, 61, 64, 0.6), inset 0.1em 0.1em 0.4em #fabec0,
		inset -0.2em -0.2em 0.8em #f37970;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		box-shadow: none;
	}
`;
