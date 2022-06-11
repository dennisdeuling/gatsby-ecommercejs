import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
`;

export const ListItem = styled.li`
	margin: 5px;
	font-size: 1.2em;
`;

export const Badge = styled.div`
	position: absolute;
	top: 38px;
	padding: 6px;
	margin: 0 0 30px 10px;
	background-color: darkorange;
	border-radius: 50%;
	font-size: 1em;
	text-align: center;
	color: white;
`;
