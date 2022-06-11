import styled from 'styled-components';
import { CustomLink } from '../../Link/Link.styles';

export const StyledButton = styled.button`
	padding: 10px 30px;
	font-size: 30px;
	color: white;
	font-family: Ubuntu, sans-serif;
	border: none;
	width: 100%;
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

export const StyledButtonLink = styled(CustomLink)`
	padding: 10px 30px;
	font-size: 30px;
	color: white;
	text-align: center;
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
