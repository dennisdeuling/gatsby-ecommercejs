import styled from 'styled-components';

export const FooterStyled = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #444041;
	color: white;
	font-size: 1.2em;
`;

export const List = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	list-style: none;
`;

export const ListItem = styled.li`
	&:not(:last-child):after {
		padding: 0 10px;
		content: '|';
	}
`;
