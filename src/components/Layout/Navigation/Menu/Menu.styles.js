import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
`;

export const ListItem = styled.li`
	margin: 5px;
`;

export const Badge = styled.div`
	position: absolute;
	top: 30px;
	padding: 6px;
	margin: 0 0 30px 10px;
	background-color: darkorange;
	border-radius: 50%;
	font-family: 'Ubuntu', sans-serif;
	font-size: 18px;
	text-align: center;
	color: white;
`;
